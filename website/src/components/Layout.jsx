import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import {
  initSmoothScroll,
  setupProgress,
  setupReveals,
  scrollToTop,
  refresh,
} from "../motion.js";

export default function Layout() {
  const { pathname } = useLocation();
  const progressRef = useRef(null);

  // Global smooth scroll + progress bar (once).
  useEffect(() => {
    initSmoothScroll();
    const cleanup = setupProgress(progressRef.current);
    document.body.classList.add("js-motion");
    return cleanup;
  }, []);

  // On every route change: jump to top, then wire reveals for the new page.
  useEffect(() => {
    scrollToTop();
    let cleanup = () => {};
    // Wait a frame so the new page is in the DOM before measuring.
    const id = requestAnimationFrame(() => {
      cleanup = setupReveals(document);
      refresh();
    });
    return () => {
      cancelAnimationFrame(id);
      cleanup();
    };
  }, [pathname]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress__fill" ref={progressRef} />
      </div>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
