import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Cancel from "./scenes/checkout/Cancel";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import AboutUs from "./scenes/Aboutus";
import Termsconditions from "./scenes/TermsConditions";
import Privacypolicy from "./scenes/Privacypolicy";
import Returns from "./scenes/Returns";
import Sizes from "./scenes/Sizes";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="app">
      {process.env.REACT_APP_MEINTENANCE_BREAK === "true" ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1 style={{ fontFamily: "Forresta Personal Use", color: "darkred" }}>We'll be back soon</h1>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<Confirmation />} />
            <Route path="/checkout/cancel" element={<Cancel />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-and-conditions" element={<Termsconditions />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/returns-refunds" element={<Returns />} />
            <Route path="/sizes" element={<Sizes />} />
          </Routes>
          <CartMenu />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
