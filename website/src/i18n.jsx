import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext(null);
const STORAGE_KEY = "nutryworld-lang";

function initialLang() {
  if (typeof window === "undefined") return "it";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "it" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "it";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "it" ? "en" : "it"));

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

// Pick the current language slice of a {it, en} dictionary.
export function useT(dict) {
  const { lang } = useLang();
  return dict[lang];
}
