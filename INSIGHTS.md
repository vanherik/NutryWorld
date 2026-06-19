# NutryWorld — INSIGHTS (brief di progetto)

> Documento di sintesi raccolto in fase di discovery. Serve come **fonte unica di
> verità** per lo sviluppo del sito.
> Stato: discovery completata, asset chiave nel repo → **pronti a sviluppare**.
> Per il riepilogo cronologico dell'intera sessione vedi `SESSION_INSIGHTS.md`.
> Ultimo aggiornamento: 2026-06-19.

---

## 1. Cos'è NutryWorld

- **Nome progetto / brand:** **Nutry World** (NutryWorld). Confermato.
- **Tipo di progetto:** **reale-simulato** (il sito è costruito come se l'azienda
  esistesse davvero, non dichiarato come concept/portfolio).
- **Tipo di sito:** **brand showcase / vetrina**. NON e-commerce (per ora),
  NON sito puramente esperienziale. L'acquisto dei prodotti avviene **in loco**,
  non online.
- **Idea di business (backstory da raccontare, in chiave "loda la nutria"):**
  si parte da due nutrie (un maschio e una femmina), che vengono pulite,
  sanificate e vaccinate fino a renderle animali puliti e sani; si riproducono
  generando moltissimi cuccioli. Gli animali vengono poi utilizzati al 100%
  (zero waste) per **carne, pellame e pelliccia**.
- **Esperienza in loco:** il visitatore può **prenotare una visita** a NutryWorld
  per vedere le nutrie, accarezzarle e **nuotare insieme ai cuccioli in una
  piscina apposita**. Sul posto può poi acquistare carne essiccata di nutria,
  prodotti in pelle (portafogli, borse, zaini…) e pellicce.

---

## 2. Obiettivo del sito

- **Azione principale desiderata:** far **prenotare una visita** (la visita è il
  cuore dell'esperienza e include la vendita in loco dei prodotti).
- Obiettivo secondario: far conoscere e apprezzare le tre linee di prodotto
  (carne, pellame, pelliccia) tramite racconto/mood.

---

## 3. Pubblico

- **Primario:** famiglie e studenti/scolaresche → interessati alle **visite**.
- **Secondario:** ristoratori → interessati alla **carne** (zona/pagina dedicata
  che spiega il processo per ottenere una carne sana e di ottimo sapore).
- Anche clienti "luxury" e curiosi sono benvenuti, ma non sono il focus.
- **Niente percorsi separati per pubblico diverso:** tutti vedono la **stessa
  home**.

---

## 4. Lingue

- **Bilingue: Italiano + Inglese.** (prevedere switch lingua IT/EN).

---

## 5. Tono, narrativa e percezione

- **Angolo emotivo dominante:** **divertente / giocoso**, con una vena di
  **dark-humor**: sono animali che puoi visitare e coccolare, pur sapendo che
  inevitabilmente diventeranno carne, pelle e pelliccia.
- **Trasparenza sull'origine:** **non** mettere in primo piano l'aspetto
  "animale sgradevole/infestante"; al contrario **lodare la nutria** → animale
  degno, molto pulito se ben curato, **carne dal sapore ottimo**, animale
  **amichevole**.
- **Come deve sentirsi il visitatore:** **curiosità palese** + **rispetto** per
  la nutria, considerando il punto di partenza reputazionale dell'animale.
- **Tono complessivo:** **mix palese** — giocoso/divertente prevalente,
  con momenti più "premium" sulle linee prodotto, ma sempre coerente.
- **Posizionamento estetico:** **poco lusso.** Priorità a **giocoso, divertente,
  friendly**.

---

## 6. La mascotte "Nutry" (volto principale del brand)

- **Nutry è il volto principale del brand**, presente **in ogni pagina**,
  vestita in modo diverso a seconda della sezione.
- **Regola ferrea:** deve essere **sempre Nutry** — mascotte carina e prodotti
  convivono sulla stessa pagina, non si separano.
- **Stile:** cartoon (come da illustrazioni allegate dall'utente: nutria marrone
  stile mascotte, occhi grandi, denti arancioni, coda folta; outfit a tema per
  ruolo).

### Mappatura mascotte ↔ pagina

> Le immagini sono **già nel repo** in `assets/mascots/` (convenzione nomi:
> CamelCase). Mappatura **confermata dall'utente**.

| Mascotte (descrizione immagine) | Pagina | Nome file |
|---|---|---|
| Nutry che **saluta**, camicia hawaiana verde a palme/ibischi (senza cucciolo) | **Home** | `NutryHome.png` |
| Nutry **chef** (toque + giacca bianca) che mangia una coscia arrosto | **Nutryti** (carne) | `NutrytiChef.png` |
| Nutry con **portafoglio in pelle** in mano e **borsa/tote in pelle con monogramma "N"** | **Pellame** | `NutryPellame.png` |
| Nutry che **saluta**, camicia hawaiana verde, **tiene in braccio un cucciolo di nutria** | **Pellicce** | `NutryPellicce.png` |
| Nutry in **costume da bagno** (ananas), infradito, occhiali da sole, **cocktail tropicale** | **Visitaci** | `NutryPiscina.png` |

---

## 7. Struttura del sito (multi-pagina)

Pagine confermate:

1. **Home**
2. **Nutryti** — pagina dedicata alla **carne di nutria**. Deve includere:
   - alcuni **utilizzi/ricette** della carne;
   - menzione della **carne essiccata** venduta in loco;
   - per i ristoratori: spiegazione del **processo** (pulizia, sanificazione,
     vaccinazione → animale sano) per una carne sana e di ottimo sapore.
3. **Pellame** — prodotti in pelle (portafogli, borse, zaini, accessori).
4. **Pellicce** — prodotti in pelliccia.
5. **Visitaci** — esperienza visite.

### Linee prodotto — trattamento sul sito
- **Stile unico** per tutto il sito (NON estetiche diverse per linea).
- Ogni linea ha la **sua pagina dedicata**.
- Per ora: **racconto / mood** (no schede prodotto né gallery complete).
  Immagini e info di dettaglio verranno aggiunte col tempo dall'utente.
- **Pelliccia:** è il tema più delicato → **non in evidenza in home**, relegata
  alla sua **sezione interna**.

### Sezione "Visitaci" (dettagli)
- **Pagina dedicata**, obiettivo: **info + emozione** e far **prenotare**.
- **Unica sezione** (NON separare visivamente "educativo/scuole" da "premium").
- **Prenotazione dal sito.**
- Per **scolaresche e grandi gruppi:** sezione con **form da compilare** con le
  informazioni necessarie.

---

## 8. Home page

- **Hero — VIDEO INTRO + SMOOTH SCROLL (deciso):** la home si apre con un
  **video intro** (render cinematografico **drone view di NutryWorld**, dall'alto
  verso le zone della farm). Il video è **già nel repo**:
  `assets/video/NutryWorldIntro.mp4`.
- Il video **NON è un semplice loop**: fa da **background scroll-scrubbed** e
  viene **"consegnato" a uno smooth scroll** della pagina (scroll cinematografico).
  → Implementazione di riferimento già in repo: skill **`scroll-video-handoff`**
  (Vite + React + GSAP ScrollTrigger + Lenis; video di sfondo scrubbed sullo
  scroll, poi handoff al contenuto della pagina).
- **Hero headline:** ancora da definire; deve giocare sul nome **"Nutry World"**
  (proposta da rifinire in fase di sviluppo).
- La **pelliccia non compare in home** (vedi sopra).
- **Ordine di scorrimento della home (verticale):** da definire insieme in fase
  di sviluppo. *(Domanda non ancora risolta — proporre una bozza di sequenza
  quando si parte col design.)*
- **Prove di fiducia (testimonianze, partner, certificazioni, numeri):** **nulla
  di particolare** per ora.

---

## 9. Direzione visiva

- **Riferimenti di stile:** nessuno fornito.
- **Palette colori:** **da definire usando la skill `impeccable`** in base agli
  asset (mascotte). Nota: dalle illustrazioni emergono **marroni/cuoio** (nutria
  + pelle) e **verde tropicale + giallo/oro** (camicie hawaiane, denti) →
  candidati naturali per la palette.
- **Animazioni/effetti:** **sì**, desiderati (scroll cinematografico, motion),
  **ma da implementare più avanti** — non ora.

---

## 10. Asset disponibili

- **Mascotte Nutry:** 5 illustrazioni **già nel repo** in `assets/mascots/`
  (`NutryHome.png`, `NutrytiChef.png`, `NutryPellame.png`, `NutryPellicce.png`,
  `NutryPiscina.png`). Vedi tabella §6.
  - ⚠️ **`NutryPellicce.png`:** l'utente ha fornito una **versione aggiornata**
    (in chat) da sostituire a quella in repo, ma l'allegato non era sul
    filesystem → **sostituzione pendente** (va ricaricato il file aggiornato).
- **Video hero:** **presente** → `assets/video/NutryWorldIntro.mp4` (render
  cinematografico drone view). Vedi §8.
- **Logo:** **non ancora fatto** (verrà creato in seguito).
- **Foto reali animali/farm:** per ora **no** → si usano **solo le mascotte**.
- **Testi:** in gran parte da scrivere.

---

## 11. Stato & prossimi passi

- Fase attuale: **pronti a partire con lo sviluppo del sito.** Asset chiave
  (mascotte + video intro) sono nel repo.
- **Branch di lavoro:** `claude/eager-tesla-kyuatg` (branch di **default** del
  repo; deciso a sessione in corso).
- Skill installate e utili al sito: `impeccable`, `ui-ux-pro-max`,
  `frontend-design`, `design`, `design-system`, e in più
  **`scroll-video-handoff`** (per il video di sfondo scroll-scrubbed in home).

### Open questions (da chiarire prima/durante lo sviluppo)
1. **Hero headline** definitiva sul nome "Nutry World".
2. **Ordine delle sezioni della home** (sequenza verticale, dopo l'intro video).
3. Conferma palette dopo analisi asset con `impeccable`.
4. Ricarica della versione aggiornata di **`NutryPellicce.png`** (sostituzione
   pendente, vedi §10).

### Risolte
- Mappatura mascotte ↔ pagina **confermata** (vedi §6); 5 mascotte nel repo.
- **Home:** intro = `assets/video/NutryWorldIntro.mp4`, seguito da smooth scroll
  (skill `scroll-video-handoff`).
- Lingue: IT + EN. Tipo sito: brand-showcase reale-simulato. Tono: giocoso/friendly.
