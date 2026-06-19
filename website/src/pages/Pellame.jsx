import { Link } from "react-router-dom";
import Mascot from "../components/Mascot.jsx";
import { useT, useLang } from "../i18n.jsx";
import { PELLAME, COMMON } from "../content.js";

export default function Pellame() {
  const t = useT(PELLAME);
  const { lang } = useLang();
  const c = COMMON[lang];

  return (
    <div className={`page tint-${t.accent}`}>
      <section className="page-hero">
        <div className="wrap page-hero__grid">
          <div className="page-hero__text" data-reveal>
            <span className="eyebrow">{t.kicker}</span>
            <h1>{t.title}</h1>
            <p className="lede">{t.lede}</p>
            <Link to="/visitaci" className="btn">{c.book}</Link>
          </div>
          <Mascot name={t.mascot} alt="Nutry con portafoglio e borsa in pelle" size="lg" className="page-hero__mascot" />
        </div>
      </section>

      <section className="section">
        <div className="wrap product-grid">
          {t.products.map((p, i) => (
            <div className="product" key={p.t} data-reveal>
              <span className="product__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="product__title">{p.t}</h3>
              <p className="product__body">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap panel" data-reveal>
          <div className="panel__text">
            <h2>{t.craftTitle}</h2>
            <p className="lede">{t.craftBody}</p>
          </div>
          <Mascot name="pellame" alt="Nutry artigiano" size="md" className="panel__mascot" />
        </div>
        <p className="wrap soft-note">{t.note}</p>
      </section>
    </div>
  );
}
