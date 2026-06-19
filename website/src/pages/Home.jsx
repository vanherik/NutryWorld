import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Mascot from "../components/Mascot.jsx";
import { useT } from "../i18n.jsx";
import { HOME } from "../content.js";
import { setupVideoScrub, refresh } from "../motion.js";

export default function Home() {
  const t = useT(HOME);
  const videoRef = useRef(null);

  // Drive the background video from scroll (desktop, motion-allowed only).
  useEffect(() => {
    const cleanup = setupVideoScrub(videoRef.current);
    const id = requestAnimationFrame(refresh);
    return () => {
      cancelAnimationFrame(id);
      cleanup();
    };
  }, []);

  return (
    <div className="home">
      {/* Fixed motion layers (behind everything) */}
      <video
        ref={videoRef}
        className="bg-video"
        src="/bg.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="mobile-poster" aria-hidden="true" />
      <div className="bg-tint" aria-hidden="true" />

      {/* Hero */}
      <section className="hero">
        <div className="wrap hero__inner">
          <span className="eyebrow">{t.kicker}</span>
          <h1 className="hero__title">
            {t.title.split("\n").map((line, i) => (
              <span key={i} className="hero__line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{t.sub}</p>
          <div className="hero__actions">
            <Link to="/visitaci" className="btn">
              {t.visit}
            </Link>
            <Link to="/nutryti" className="btn btn--ghost">
              {t.explore}
            </Link>
          </div>
          <div className="hero__hint">
            <span className="hero__hint-dot" />
            {t.scrollHint}
          </div>
        </div>
        <Mascot name="home" alt="Nutry saluta in camicia hawaiana" size="hero" className="hero__mascot" />
      </section>

      {/* Story */}
      <section className="section story">
        <div className="wrap story__grid">
          <div data-reveal>
            <span className="eyebrow">{t.storyKicker}</span>
            <h2>{t.storyTitle}</h2>
            <p className="lede">{t.storyBody}</p>
          </div>
          <Mascot name="pellicce" alt="Nutry con un cucciolo" size="md" className="story__mascot" />
        </div>
      </section>

      {/* Pillars */}
      <section className="section pillars">
        <div className="wrap">
          <div className="pillars__head" data-reveal>
            <span className="eyebrow">{t.pillarsKicker}</span>
            <h2>{t.pillarsTitle}</h2>
          </div>
          <div className="pillars__grid">
            {t.pillars.map((p) => (
              <Link
                key={p.tag}
                to={p.to}
                className={`pillar pillar--${p.accent}`}
                data-reveal
              >
                <Mascot name={p.mascot} alt={p.title} size="sm" float={false} />
                <span className="pillar__tag">{p.tag}</span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__body">{p.body}</p>
                <span className="pillar__arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="wrap cta__inner" data-reveal>
          <div>
            <h2>{t.ctaTitle}</h2>
            <p className="lede">{t.ctaBody}</p>
            <Link to="/visitaci" className="btn btn--leaf">
              {t.visit}
            </Link>
          </div>
          <Mascot name="piscina" alt="Nutry in costume con cocktail" size="md" />
        </div>
      </section>
    </div>
  );
}
