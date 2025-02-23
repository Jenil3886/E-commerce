import React, { useState, useContext } from "react";
import "../Layout.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import { userMenu } from "../../../helper/data";
import { Link } from "react-router-dom";
import { useCartSidebar } from "../../../context/CartSidebarContext";
import CartSidebar from "../../../components/CartSidebar";
import { CartContext } from "../../../context/CartContext";
import ReactButton from "../../../components/Buttons/button";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleUserMenu = () => {
		setIsUserMenuOpen(!isUserMenuOpen);
	};

	const { isCartOpen, toggleCartSidebar } = useCartSidebar();
	const { cartItems } = useContext(CartContext);

	return (
		<>
			<div className="header Raleway-light">
				<div className="container">
					<div className="header-contant">
						{/* Mobile Menu Button */}
						<div className="left-side">
							<div className="col-3 col-lg-3 d-lg-none">
								<ReactButton type="button" iconImg={<IoMenu />} className="header--button menu-button" onClick={toggleMenu} />
							</div>

							{/* Logo */}
							<div className="col-5 col-lg-3 text-center text-lg-left">
								<div className="logo">
									<Link to="/">
										<img
											src="https://furns-react.netlify.app/_ipx/w_1920,q_75/%2Fimages%2Flogo%2Flogo.png?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75"
											alt="Furns - Furniture React eCommerce Template"
											className="logo-img"
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className="right-side">
							{/* Mobile Search and Settings */}

							{/* <div className="header-actions">
								<button className="action-button">
									<IoSearch />
								</button>
							</div> */}

							{/* Desktop Actions */}

							{/* <div className="header-actions">
								<button className="action-button" onClick={toggleUserMenu}>
									<CiUser />

									{isUserMenuOpen && (
										<ul className="user-menu">
											{userMenu.map((usermenu) => (
												<li key={usermenu.id}>
													<a href={usermenu.link}>{usermenu.name}</a>
												</li>
											))}
										</ul>
									)}
								</button>
							</div>

							<div className="header-actions">
								<button className="action-button">
									<PiHandbag />
									<span className="cart-count">0</span>
								</button>
							</div> */}

							{/*  */}
							<div className="header-container">
								{/* Search Button */}
								<div className="header-section">
									<ReactButton type="button" iconImg={<IoSearch />} className="header-btn" />
								</div>
								{/* Profile Dropdown */}
								<div className="header-section">
									<ReactButton type="button" iconImg={<CiUser />} className="header-btn profile-btn" onClick={toggleUserMenu} />
									{isUserMenuOpen && (
										<ul className={`profile-menu `}>
											{userMenu.map((usermenu) => (
												<li key={usermenu.id} onClick={() => setIsUserMenuOpen(false)}>
													<Link to={usermenu.link}>{usermenu.name}</Link>
												</li>
											))}
										</ul>
									)}
								</div>
								{/* Cart Button */}
								<div className="header-section">
									{/* <button className="header-btn cart-btn" onClick={toggleCartSidebar}>
										<PiHandbag />
										<span className="cart-count">{cartItems.length}</span>
									</button> */}
									<ReactButton
										type="button"
										className="header-btn cart-btn"
										iconImg={<PiHandbag />}
										badgedText={cartItems.length}
										badgedClass="cart-count"
										onClick={toggleCartSidebar}
									/>
								</div>
							</div>
							{/*  */}
						</div>
					</div>
				</div>
			</div>

			{/* Background Overlay */}
			{isCartOpen && <div className="background-overlay" onClick={toggleCartSidebar}></div>}

			{/* Cart Sidebar */}
			<CartSidebar isOpen={isCartOpen} toggleSidebar={toggleCartSidebar} />
		</>
	);
};

export default Header;
