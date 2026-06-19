import { Link } from "react-router-dom";
import Mascot from "../components/Mascot.jsx";
import { useT, useLang } from "../i18n.jsx";
import { PELLICCE, COMMON } from "../content.js";

export default function Pellicce() {
  const t = useT(PELLICCE);
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
          <Mascot name={t.mascot} alt="Nutry con un cucciolo" size="lg" className="page-hero__mascot" />
        </div>
      </section>

      <section className="section">
        <div className="wrap feature-grid">
          {t.points.map((p) => (
            <div className="feature" key={p.t} data-reveal>
              <h3 className="feature__title">{p.t}</h3>
              <p className="feature__body">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap panel panel--center" data-reveal>
          <p className="statement">{t.body}</p>
        </div>
        <p className="wrap soft-note">{t.note}</p>
      </section>
    </div>
  );
}
