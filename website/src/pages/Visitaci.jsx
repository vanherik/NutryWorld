import { useState } from "react";
import Mascot from "../components/Mascot.jsx";
import { useT } from "../i18n.jsx";
import { VISITACI } from "../content.js";

export default function Visitaci() {
  const t = useT(VISITACI);
  const [sent, setSent] = useState(false);
  const f = t.form;

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true); // demo: no backend
  };

  return (
    <div className={`page tint-${t.accent}`}>
      <section className="page-hero">
        <div className="wrap page-hero__grid">
          <div className="page-hero__text" data-reveal>
            <span className="eyebrow">{t.kicker}</span>
            <h1>{t.title}</h1>
            <p className="lede">{t.lede}</p>
            <a href="#book" className="btn">{t.bookCta}</a>
          </div>
          <Mascot name={t.mascot} alt="Nutry in costume con cocktail" size="lg" className="page-hero__mascot" />
        </div>
      </section>

      <section className="section">
        <div className="wrap exp-grid">
          {t.experiences.map((x, i) => (
            <div className="exp" key={x.t} data-reveal>
              <span className="exp__num" aria-hidden="true">{i + 1}</span>
              <h3 className="exp__title">{x.t}</h3>
              <p className="exp__body">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="book">
        <div className="wrap book-grid">
          <div className="book__intro" data-reveal>
            <h2>{t.bookTitle}</h2>
            <p className="lede">{t.bookBody}</p>
            <Mascot name="piscina" alt="" float={true} size="md" className="book__mascot" />
          </div>

          <div className="book__form-wrap" data-reveal>
            <h3 className="book__form-title">{t.groupTitle}</h3>
            <p className="book__form-sub">{t.groupBody}</p>

            {sent ? (
              <p className="form-done" role="status">{f.done}</p>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <label className="field">
                  <span>{f.name}</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label className="field">
                  <span>{f.org}</span>
                  <input type="text" name="org" />
                </label>
                <label className="field">
                  <span>{f.email}</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <div className="field-row">
                  <label className="field">
                    <span>{f.people}</span>
                    <input type="number" name="people" min="1" />
                  </label>
                  <label className="field">
                    <span>{f.date}</span>
                    <input type="date" name="date" />
                  </label>
                </div>
                <label className="field">
                  <span>{f.message}</span>
                  <textarea name="message" rows="3" />
                </label>
                <button type="submit" className="btn">{f.submit}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
