import Navbar from "./Navbar";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Apropos from "./components/Apropos";
import Projets from "./components/Projets";
import Notfaund from "./components/Notfaund";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/Projets" element={<Projets />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Notfaund" element={<Notfaund />} />
          <Route path="/" element={<Navbar />} />
       
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}