import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Nutryti from "./pages/Nutryti.jsx";
import Pellame from "./pages/Pellame.jsx";
import Pellicce from "./pages/Pellicce.jsx";
import Visitaci from "./pages/Visitaci.jsx";

// HashRouter keeps the multi-page demo working on any static host without
// server-side rewrites (refreshing /pellame won't 404).
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nutryti" element={<Nutryti />} />
          <Route path="pellame" element={<Pellame />} />
          <Route path="pellicce" element={<Pellicce />} />
          <Route path="visitaci" element={<Visitaci />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
