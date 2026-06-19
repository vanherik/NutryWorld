// ============================================================
// Motion engine — Lenis smooth scroll + GSAP ScrollTrigger.
// Adapted from the `scroll-video-handoff` skill for a React Router site:
// Lenis is global; video-scrub and reveals are wired per page and cleaned up.
// ============================================================
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isTouch =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none), (max-width: 768px)").matches;

let lenis = null;
let tickerFn = null;

// --- Global smooth scroll (called once) ---
export function initSmoothScroll() {
  if (lenis || prefersReduced) return null;

  lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9 });
  lenis.on("scroll", ScrollTrigger.update);

  tickerFn = (time) => lenis.raf(time * 1000); // GSAP ticker is seconds; Lenis wants ms
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  if (import.meta.env.DEV) window.__lenis = lenis;
  return lenis;
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}

export function refresh() {
  ScrollTrigger.refresh();
}

// --- Scroll-scrubbed background video (desktop only) ---
// Maps full-page scroll progress (0→1) to video.currentTime. Returns cleanup.
export function setupVideoScrub(video) {
  if (!video || isTouch || prefersReduced) return () => {};

  let lastT = -1;
  const update = () => {
    if (!video.duration) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, scrollTop / Math.max(1, maxScroll)));
    const t = progress * (video.duration - 0.05);
    if (Math.abs(t - lastT) > 0.008) {
      video.currentTime = t;
      lastT = t;
    }
  };

  video.pause();
  video.currentTime = 0;

  const st = ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: update,
  });

  video.addEventListener("loadedmetadata", update);
  if (import.meta.env.DEV) window.__bgv = video;

  return () => {
    st.kill();
    video.removeEventListener("loadedmetadata", update);
  };
}

// --- Section reveals (enhances already-visible content) ---
export function setupReveals(root = document) {
  const els = [...root.querySelectorAll("[data-reveal]")];
  if (prefersReduced || !els.length) return () => {};

  const triggers = els.map((el, i) =>
    gsap.fromTo(
      el,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        delay: (i % 3) * 0.06,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    )
  );

  return () => triggers.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
}

// --- Global scroll progress bar ---
export function setupProgress(fill) {
  if (!fill) return () => {};
  const st = ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      fill.style.transform = `scaleX(${self.progress})`;
    },
  });
  return () => st.kill();
}
