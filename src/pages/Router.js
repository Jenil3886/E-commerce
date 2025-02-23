import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Header from "./core/Layout/Header";
import Navbar from "./core/Layout/Navbar";
import HomePage from "./Home/HomePage";
import AboutUs from "./About/About";
import Contact from "./Contact/Contact";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Compare from "./Compare/Compare";
import ProductDetail from "./Product/ProductDetail";
import Footer from "./core/Layout/Footer";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
