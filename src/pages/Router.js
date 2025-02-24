import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
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
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import "./Pages.css";

const AppRouter = () => {
	const cart = useSelector((state) => state.cart);
	const grandTotal = cart.reduce((total, product) => total + product.SALE_PRICE * product.quantity, 0);

	return (
		<>
			<div class="cart-mini-box">
				<svg
					stroke="currentColor"
					fill="none"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<path d="M16 10a4 4 0 0 1-8 0"></path>
				</svg>
				<span class="counter">0 Items</span>
				<span class="mini-box-pirce">${grandTotal.toFixed(2)}</span>
			</div>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/compare" element={<Compare />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/product/:productId" element={<ProductDetail />} />
			</Routes>
			<Footer />
		</>
	);
};

export default AppRouter;
