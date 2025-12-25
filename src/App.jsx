import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
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
