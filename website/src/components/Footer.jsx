import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { NAV, COMMON } from "../content.js";

export default function Footer() {
  const { lang } = useLang();
  const t = COMMON[lang];
  const links = NAV[lang];

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <img src="/mascots/piscina.png?v=2" alt="" aria-hidden="true" className="footer__mascot" />
          <div>
            <span className="brand__word footer__word">
              Nutry<span className="brand__word-accent">World</span>
            </span>
            <p className="footer__tagline">{t.footerTagline}</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="footer__link">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} Nutry World</span>
        <span className="footer__note">{t.footerNote}</span>
      </div>
    </footer>
  );
}
