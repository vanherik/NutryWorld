import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Nutryti from "./pages/Nutryti.jsx";
import Pellame from "./pages/Pellame.jsx";
import Pellicce from "./pages/Pellicce.jsx";
import Visitaci from "./pages/Visitaci.jsx";

// Clean URLs (/pellame, /visitaci). On Vercel, vercel.json rewrites every
// path to /index.html so deep links and refreshes resolve to the SPA.
export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
