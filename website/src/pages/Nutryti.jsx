import { Link } from "react-router-dom";
import Mascot from "../components/Mascot.jsx";
import { useT } from "../i18n.jsx";
import { NUTRYTI, COMMON } from "../content.js";
import { useLang } from "../i18n.jsx";

export default function Nutryti() {
  const t = useT(NUTRYTI);
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
          <Mascot name={t.mascot} alt="Nutry chef" size="lg" className="page-hero__mascot" />
        </div>
      </section>

      <section className="section">
        <div className="wrap feature-grid">
          {t.features.map((f) => (
            <div className="feature" key={f.t} data-reveal>
              <h3 className="feature__title">{f.t}</h3>
              <p className="feature__body">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap panel" data-reveal>
          <div className="panel__text">
            <h2>{t.driedTitle}</h2>
            <p className="lede">{t.driedBody}</p>
          </div>
          <div className="panel__aside">
            <h3 className="panel__aside-title">{t.usesTitle}</h3>
            <ul className="checklist">
              {t.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap chef" data-reveal>
          <div>
            <h2>{t.chefTitle}</h2>
            <p className="lede">{t.chefBody}</p>
            <Link to="/visitaci" className="btn btn--ghost">{t.chefCta}</Link>
          </div>
          <Mascot name="nutryti" alt="Nutry chef" size="sm" className="chef__mascot" />
        </div>
      </section>
    </div>
  );
}
