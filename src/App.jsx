import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

import People from "./pages/people/People";
import Core from "./pages/people/Core";
import Contributors from "./pages/people/Contributors";
import Alumni from "./pages/people/Alumni";

export default function App() {
  return (
    <Router basename="/ai-frontend">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/people" element={<People />} />
        <Route path="/people/core" element={<Core />} />
        <Route path="/people/contributors" element={<Contributors />} />
        <Route path="/people/alumni" element={<Alumni />} />
      </Routes>

      <Footer />
    </Router>
  );
}
