# Scroll-Driven Background Video — Implementation Handoff

A self-contained reference for taking a **raw AI-generated video** and turning it into a
**scroll-scrubbed full-screen background** on a Vite + React landing page (GSAP ScrollTrigger +
Lenis). Everything here is extracted from a working build — the code is real, not pseudocode.

You do **not** need any other files to follow this. Replace `vanta` / `bg.mp4` names with your own.

---

## The pipeline in one line

`raw .mp4` → **re-encode to all-keyframe H.264** → `website/public/bg.mp4` → mount as a **fixed
full-screen `<video>`** behind a tint layer → drive `video.currentTime` from **scroll progress**
(Lenis + GSAP ScrollTrigger) → **disable on touch** and show the hero still instead.

---

## Step 1 — Re-encode the raw video to all-keyframe H.264

This is the single most important step and the one most people get wrong. A normal H.264 file
only has a keyframe every ~250 frames; seeking to an arbitrary `currentTime` between keyframes
forces the browser to decode from the previous keyframe forward, which makes scroll-scrubbing
stutter and lag. The fix is to re-encode so **every frame is a keyframe** (GOP size = 1). The
file gets larger, but seeking becomes instant and the scrub is buttery.

`scripts/swap-bg-video.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

INPUT="$1"
OUTPUT="website/public/bg.mp4"

mkdir -p website/public

ffmpeg -y -i "$INPUT" -an -c:v libx264 -preset slow -crf 18 \
  -g 1 -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p \
  -movflags +faststart "$OUTPUT"

echo "Encoded all-keyframe background video to $OUTPUT"
```

Run it:

```bash
bash scripts/swap-bg-video.sh assets/videos/vanta-scroll-background-raw.mp4
```

Flag-by-flag (why each matters):

| Flag | Purpose |
|------|---------|
| `-an` | Drop audio — it's a silent background, saves bytes. |
| `-c:v libx264` | Universally supported codec for `<video>`. |
| `-preset slow -crf 18` | High visual quality (lower CRF = better); `slow` improves compression. |
| `-g 1 -keyint_min 1` | **GOP = 1 → every frame is a keyframe.** This is what enables smooth scrubbing. |
| `-sc_threshold 0` | Disable scene-cut keyframe heuristics so the GOP stays exactly 1. |
| `-pix_fmt yuv420p` | Required for broad browser/Safari compatibility. |
| `-movflags +faststart` | Moves the moov atom to the front so the video can start before fully downloaded. |

> Windows note: run via Git Bash / WSL, or translate to a PowerShell `ffmpeg` call with the same
> flags. `ffmpeg` must be on PATH.

---

## Step 2 — Markup: fixed video layer + tint + mobile poster

The video lives **outside** the scrolling content as a fixed layer. A separate `.mobile-poster`
div (hidden on desktop) holds the hero still for touch devices, and `.bg-tint` darkens the video
so foreground text stays readable.

```jsx
// App.jsx (the relevant layers)
<>
  {/* Fixed motion layers */}
  <video id="bgv" className="bg-video" src="/bg.mp4" muted playsInline preload="auto" />
  <div className="mobile-poster" aria-hidden="true" />
  <div className="bg-tint" aria-hidden="true" />

  <div className="page">
    {/* ...all scrolling sections... */}
  </div>
</>
```

`<video>` attributes that matter: `muted` + `playsInline` are required for iOS to allow the
element at all without user interaction; `preload="auto"` fetches the whole file up front so
seeking never waits on the network. **No `autoplay`, no `controls`, no `loop`** — we never play
it, we only seek it.

---

## Step 3 — CSS: pin the video full-screen, swap to a still on mobile

```css
.bg-video {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.mobile-poster {
  display: none; /* desktop: hidden, video is shown */
}

.bg-tint {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(8, 9, 11, 0.66) 100%),
    linear-gradient(to bottom, rgba(8, 9, 11, 0.42), rgba(8, 9, 11, 0.18) 30%, rgba(8, 9, 11, 0.5));
}

/* Mobile / touch: kill the video, show the hero still instead */
@media (hover: none), (max-width: 768px) {
  .bg-video {
    display: none;
  }
  .mobile-poster {
    display: block;
    position: fixed;
    inset: 0;
    background-image: url("/img/hero-vanta.png");
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
}
```

Your page content needs a `z-index` above `1` (or its own stacking context) so it sits over the
video and tint.

---

## Step 4 — The scroll engine: Lenis + ScrollTrigger + frame scrub

This is the full `motion.js`. The video-scrub part is `setupVideoScrub()`; the rest (component
reveal, section reveals, progress bar) is included so you see how they share one Lenis/ticker
setup. The critical detail is in `setupVideoScrub`: **Lenis drives `ScrollTrigger.update`, and on
every scroll update we map scroll progress (0→1) to `video.currentTime`**, with a small threshold
so we don't thrash `currentTime` on sub-pixel scrolls.

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Touch devices skip the video entirely (see initMotion below).
const isTouch = window.matchMedia("(hover: none), (max-width: 768px)").matches;

let lenis;
let lastVideoT = -1;
let tickerFn;

function setupLenis() {
  lenis = new Lenis({
    duration: 1.12,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  // Lenis must drive ScrollTrigger, and GSAP's ticker must drive Lenis.raf.
  lenis.on("scroll", ScrollTrigger.update);

  tickerFn = (time) => {
    lenis.raf(time * 1000); // GSAP ticker time is in seconds; Lenis wants ms.
  };
  gsap.ticker.add(tickerFn);

  gsap.ticker.lagSmoothing(0); // keep scrubbing stable if a frame is dropped
}

function setupVideoScrub() {
  const bgVideo = document.querySelector("#bgv");
  if (!bgVideo) return;

  const updateVideo = () => {
    if (!bgVideo.duration) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, scrollTop / Math.max(1, maxScroll)));
    const t = progress * (bgVideo.duration - 0.05); // small margin off the very end

    // Only seek if we've moved enough — avoids hammering currentTime every frame.
    if (Math.abs(t - lastVideoT) > 0.008) {
      bgVideo.currentTime = t;
      lastVideoT = t;
    }
  };

  bgVideo.pause();          // never let it play on its own
  bgVideo.currentTime = 0;

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: updateVideo,
  });

  // First frame as soon as metadata (duration) is known.
  bgVideo.addEventListener("loadedmetadata", updateVideo);

  if (import.meta.env.DEV) {
    window.__bgv = bgVideo; // dev hook for manual testing in the console
  }
}

function setupComponentReveal() {
  const section = document.querySelector("#split");
  if (!section) return;

  const pin = section.querySelector(".split__pin");
  const words = [...section.querySelectorAll(".split-word")];
  const labels = [...section.querySelectorAll(".component-label")];

  function render(p) {
    words.forEach((word, i) => {
      const start = (i / words.length) * 0.62;
      const o = gsap.utils.clamp(0, 1, (p - start) / 0.14);
      word.style.opacity = 0.12 + o * 0.88;
      word.style.filter = `blur(${(1 - o) * 8}px)`;
      word.style.transform = `translateY(${(1 - o) * 18}px)`;
    });

    labels.forEach((label, i) => {
      const start = 0.28 + i * 0.08;
      const o = gsap.utils.clamp(0, 1, (p - start) / 0.12);
      label.style.opacity = o;
      label.style.transform = `translateY(${(1 - o) * 14}px)`;
    });
  }

  render(0);

  if (isTouch) {
    render(1); // no pinning on touch — show everything statically
    return;
  }

  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: () => "+=" + innerHeight * 1.8,
    pin,
    scrub: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => render(self.progress),
  });
}

function setupSectionReveals() {
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      }
    );
  });
}

function setupScrollProgress() {
  const bar = document.querySelector(".progress-bar__fill");
  if (!bar) return;

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      bar.style.transform = `scaleX(${self.progress})`;
    },
  });
}

export function initMotion() {
  setupLenis();
  if (!isTouch) setupVideoScrub(); // video scrub is desktop-only
  setupComponentReveal();
  setupSectionReveals();
  setupScrollProgress();

  if (import.meta.env.DEV) {
    window.__lenis = lenis;
    window.__ST = ScrollTrigger;
  }
}

export function destroyMotion() {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  if (tickerFn) gsap.ticker.remove(tickerFn);
  if (lenis) lenis.destroy();
}
```

Wire it up once, in the React entry component:

```jsx
import { useEffect } from "react";
import { initMotion, destroyMotion } from "./motion.js";

export default function App() {
  useEffect(() => {
    initMotion();
    return destroyMotion; // clean up ScrollTrigger/Lenis on unmount
  }, []);

  return (/* ...layers + page... */);
}
```

---

## Why these specific choices (the non-obvious bits)

- **All-keyframe re-encode (`-g 1`)** — without it, scrubbing stutters. This is the #1 gotcha.
  Everything else is standard scroll work; this one is video-specific and easy to miss.
- **We `pause()` and only set `currentTime`** — the video is never played. Scroll position *is*
  the playhead. That's what makes it feel "scrubbed" rather than "auto-playing behind content."
- **The `> 0.008` threshold on `currentTime`** — setting `currentTime` triggers a seek/decode;
  doing it on every micro-scroll wastes work and can fight the decoder. Skipping tiny deltas
  keeps it smooth.
- **Lenis ↔️ ScrollTrigger wiring** — `lenis.on("scroll", ScrollTrigger.update)` plus driving
  `lenis.raf` from `gsap.ticker` is the canonical way to make smooth-scroll and ScrollTrigger
  agree on scroll position. Get this wrong and the scrub jitters or desyncs.
- **`lagSmoothing(0)`** — stops GSAP from "catching up" after a dropped frame, which would make
  the video jump.
- **Touch fallback is a hard skip, not a degrade** — `isTouch` disables `setupVideoScrub`
  entirely and CSS swaps in `hero-vanta.png`. Mobile decoders choke on all-keyframe seeking and
  iOS restricts programmatic video, so a still is both faster and more reliable.
- **`muted` + `playsInline` + `preload="auto"`** on the `<video>` — required for iOS to even
  allow the element, and `preload="auto"` means seeks never block on network.

---

## Verify it works

```bash
cd website
npm install        # ensure gsap + lenis are installed
npm run dev        # open the dev server, scroll, watch the video scrub frame-by-frame
npm run build -- --base=./   # production build; fix any errors
```

Dev-only console hooks (exposed in `import.meta.env.DEV`):

- `window.__bgv` — the `<video>` element. Try `__bgv.duration`, or `__bgv.currentTime = 2`.
- `window.__lenis` — the Lenis instance.
- `window.__ST` — ScrollTrigger (e.g. `__ST.getAll()`).

**Quick sanity checks:** scrolling top→bottom should sweep the video start→end with no stutter;
`__bgv.currentTime` should track scroll; on a narrow viewport (or DevTools device mode) the video
should be replaced by the static hero image with no console errors.
