# NutryWorld — SESSION INSIGHTS (riepilogo sessione)

> Riepilogo cronologico/tematico di tutto ciò che è stato deciso e fatto in
> questa sessione. Per il **brief di prodotto** del sito vedi `INSIGHTS.md`.
> Ultimo aggiornamento: 2026-06-19.

---

## 1. Skill installate nel repo (`.claude/skills/`)

Installate da repo GitHub esterni, su richiesta dell'utente:

- **`nextlevelbuilder/ui-ux-pro-max-skill`** → 7 skill: `ui-ux-pro-max`,
  `design`, `design-system`, `brand`, `ui-styling`, `banner-design`, `slides`.
- **`pbakaus/impeccable`** → `impeccable` (design fluency / anti-pattern, con
  `reference/` + `scripts/`).
- **`anthropics/claude-code`** → 10 skill (l'utente ha scelto "tutte"):
  `frontend-design`, `writing-rules` (hookify), `claude-opus-4-5-migration`, e la
  suite `plugin-dev` (`agent-development`, `command-development`,
  `hook-development`, `mcp-integration`, `plugin-settings`, `plugin-structure`,
  `skill-development`).
- **`leonxlnx/taste-skill`** → bundle di 13 skill frontend-taste (`taste-skill`,
  `taste-skill-v1`, `gpt-tasteskill`, `brandkit`, `brutalist-skill`,
  `minimalist-skill`, `soft-skill`, `redesign-skill`, `stitch-skill`,
  `output-skill`, `image-to-code-skill`, `imagegen-frontend-web`,
  `imagegen-frontend-mobile`).
- **`yogirk/agent-council`** (sorgente reale dietro il link mcpmarket) → skill
  `council` + sub-comandi (`council-list`, `council-replay`, `council-revisit`,
  `council-outcome`, `agent-council-nudge`), vendorizzata self-contained con la
  sua CLI Bun (`bin/` + `src/`).
- **`scroll-video-handoff`** → aggiunta al branch (background video
  scroll-scrubbed con Vite + React + GSAP ScrollTrigger + Lenis). Rilevante per
  la home (vedi `INSIGHTS.md` §8).

### Nota su agent-council (runtime)
`/council` convoca altri **CLI agent** come sottoprocessi (Claude = chairman;
`codex` e `gemini` = membri). Per funzionare servono:
- **Bun** (presente), e **almeno 2 CLI** tra `claude`/`codex`/`gemini` installati
  e autenticati (qui mancano `codex` e `gemini`).
- **Costi:** dipende dall'auth — abbonamento ChatGPT / free tier Google = incluso
  nei limiti; **API key = a consumo** (ogni `/council` = più chiamate, ×2 con
  `--with-review`). Vedi conversazione per dettagli.

---

## 2. Git — branch, PR, decisioni

- Sviluppo iniziale sul branch `claude/funny-babbage-yxa3ko`.
- Scoperto che il **branch di default** del repo è `claude/eager-tesla-kyuatg`
  (NON `main`), popolato da una sessione parallela con le stesse 18 skill base.
- Le due storie git erano **separate** (root indipendenti). Per una PR pulita, il
  branch `funny-babbage` è stato ricostruito **sopra** `eager-tesla` (solo
  aggiunte, nessun conflitto) → **PR #1** aperta.
- **Cambio default branch + cancellazione `eager-tesla`:** NON possibile dai tool
  disponibili (il GitHub MCP non espone la modifica delle impostazioni repo, e
  manca la `gh` CLI). Richiede azione manuale dell'utente dalla UI.
- **Decisione finale dell'utente:** lavorare direttamente sul branch di default
  **`claude/eager-tesla-kyuatg`** per il resto della sessione.
- Pulizia: rimossi 5 PNG mascotte duplicati caricati per errore alla **radice**
  del repo (tenute solo le copie in `assets/mascots/`).
- Allineati i nomi nella doc al file reale **`NutrytiChef.png`**.

> ⚠️ Le immagini allegate **in chat** non finiscono sul filesystem → non possono
> essere salvate da Claude. L'utente le ha caricate via UI GitHub. Il **video**
> invece è arrivato come file su disco (uploads) → aggiunto al repo da Claude.

---

## 3. Asset nel repo

- `assets/mascots/` → 5 mascotte: `NutryHome.png`, `NutrytiChef.png`,
  `NutryPellame.png`, `NutryPellicce.png`, `NutryPiscina.png` (+ `README.md`).
  - ⚠️ Versione aggiornata di `NutryPellicce.png` fornita in chat ma **non
    sostituita** (allegato non su filesystem) → ricarica pendente.
- `assets/video/NutryWorldIntro.mp4` → video intro cinematografico drone view
  per la **home** (poi smooth scroll). Vedi `INSIGHTS.md` §8.

---

## 4. Sintesi decisioni di prodotto

(Dettaglio completo in `INSIGHTS.md`.)

- **Brand:** Nutry World. Sito **brand-showcase / vetrina**, **reale-simulato**,
  **bilingue IT/EN**. Acquisti **in loco**, non e-commerce.
- **Obiettivo sito:** far **prenotare le visite** (pubblico primario: famiglie /
  scuole; secondario: ristoratori per la carne).
- **Tono:** giocoso/divertente con dark-humor; **loda la nutria** (pulita, sana,
  carne ottima, animale amichevole). Poco lusso, priorità friendly.
- **Mascotte Nutry** = volto del brand, presente in ogni pagina con outfit a tema.
- **Pagine:** Home, **Nutryti** (carne, con usi/ricette + carne essiccata +
  processo per i ristoratori), **Pellame**, **Pellicce** (sezione interna, non in
  home), **Visitaci** (prenotazione + form per scolaresche/gruppi).
- **Home:** intro video → smooth scroll (skill `scroll-video-handoff`).
- **Direzione visiva:** stile unico; palette da definire con `impeccable` sugli
  asset (emergono marroni/cuoio + verde tropicale/oro); animazioni/scroll
  cinematografico desiderati.

---

## 5. Prossimi passi

1. (Utente) Ricaricare la versione aggiornata di `NutryPellicce.png`.
2. Definire **palette** con `impeccable` sugli asset reali.
3. Sciogliere le open question: **hero headline** e **ordine sezioni home**.
4. Montare lo **scheletro multi-pagina** (Home + 4 pagine), con intro video +
   smooth scroll in home.
