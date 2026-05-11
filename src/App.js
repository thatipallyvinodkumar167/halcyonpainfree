import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import BookNowPopup from "./components/BookNowPopup";
import ScrollToTop from "./components/ScrollToTop";
import PainConditions from "./pages/PainConditions";
import ConditionDetail from "./pages/ConditionDetail";
import BackPainPage from "./pages/BackPainPage";
import ContactPage from "./pages/ContactPage";

export default function App() {

  const [openBook, setOpenBook] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      {/* FLOATING ACTIONS */}
      <FloatingActions onBook={() => setOpenBook(true)} />

      {/* BOOK NOW POPUP */}
      <BookNowPopup
        open={openBook}
        onClose={() => setOpenBook(false)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pain-conditions" element={<PainConditions />} />
        <Route path="/pain-conditions/:conditionId" element={<ConditionDetail />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
