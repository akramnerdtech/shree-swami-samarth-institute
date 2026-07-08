import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/verify/:certificateNo" element={<Certificate />} />
    </Routes>
  );
}

export default App;