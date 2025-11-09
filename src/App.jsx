import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getInitialTheme, toggleTheme } from "./utils/theme";

import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import CancellationAndRefund from "./pages/CancellationAndRefund";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-white text-gray-800"
        }`}
      >
        <Header theme={theme} setTheme={setTheme} />
        <main className="flex-1 container mx-auto px-4 py-10 mt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/shipping-and-delivery"
              element={<ShippingAndDelivery />}
            />
            <Route
              path="/cancellation-and-refund"
              element={<CancellationAndRefund />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
