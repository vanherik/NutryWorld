# Nutry World — sito

Brand-showcase multi-pagina per **Nutry World**, costruito a partire da
`../INSIGHTS.md`. Stack: **Vite + React + React Router**, smooth scroll con
**Lenis** e **GSAP ScrollTrigger**.

## Sviluppo

```bash
cd website
npm install
npm run dev      # server di sviluppo
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

## Struttura

- `src/pages/` — Home, Nutryti, Pellame, Pellicce, Visitaci
- `src/components/` — Nav, Footer, Layout, Mascot
- `src/motion.js` — Lenis + ScrollTrigger + scrub del video (skill `scroll-video-handoff`)
- `src/i18n.jsx` + `src/content.js` — bilingue IT/EN
- `src/styles/` — `tokens.css` (palette/scala), `global.css`, `components.css`
- `public/mascots/` — mascotte Nutry trasparenti (knockout + downscale dagli asset)
- `public/bg.mp4` — video intro della home (scroll-scrubbed)

## Video di sfondo (importante)

La home usa un **video di sfondo guidato dallo scroll**. Per uno scrubbing fluido
il video va **ri-codificato all-keyframe (GOP=1)**. Attualmente `public/bg.mp4` è
il file originale: funziona, ma per la massima fluidità esegui (con `ffmpeg`):

```bash
bash scripts/swap-bg-video.sh ../assets/video/NutryWorldIntro.mp4 public/bg.mp4
```

Su mobile/touch il video viene sostituito da uno sfondo statico (vedi
`.mobile-poster` in `components.css`).

## Palette

Ancorata agli asset reali (mascotte), tema "fattoria tropicale al tramonto":
espresso scuro + caramello-pelliccia + accenti tropicali (verde foglia, teal,
ambra, corallo). Definita con la skill `impeccable`. Token in `src/styles/tokens.css`.
