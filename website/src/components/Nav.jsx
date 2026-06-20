import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { NAV, COMMON } from "../content.js";

export default function Nav() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const links = NAV[lang];
  const t = COMMON[lang];

  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand__mark" src="/mascots/home.png?v=2" alt="" aria-hidden="true" />
          <span className="brand__word">
            Nutry<span className="brand__word-accent">World</span>
          </span>
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => "nav__link" + (isActive ? " is-active" : "")}
              onClick={() => setOpen(false)}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/visitaci" className="btn nav__cta" onClick={() => setOpen(false)}>
            {t.book}
          </Link>
        </nav>

        <div className="nav__actions">
          <button className="lang-toggle" onClick={toggle} aria-label={`Switch language to ${t.langName}`}>
            <span className="lang-toggle__current">{lang.toUpperCase()}</span>
            <span className="lang-toggle__next">{t.langName}</span>
          </button>
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
