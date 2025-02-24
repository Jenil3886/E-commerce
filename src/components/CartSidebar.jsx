import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../features/cartSlice";
import "./Components.css";
import { Link } from "react-router-dom";
import { useCartSidebar } from "../context/CartSidebarContext";
import ReactButton from "./Buttons/button";

const CartSidebar = ({ isOpen, toggleSidebar }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { isCartOpen, toggleCartSidebar } = useCartSidebar();

	const handleRemove = (id) => {
		dispatch(removeFromCart(id));
	};

	const handleIncrement = (id) => {
		dispatch(incrementQuantity(id));
	};

	const handleDecrement = (id) => {
		dispatch(decrementQuantity(id));
	};

	const grandTotal = cart.reduce((total, product) => total + product.SALE_PRICE * product.quantity, 0);

	if (!isOpen) return null;

	return (
		<>
			{isCartOpen && <div className="background-overlay" onClick={toggleCartSidebar}></div>}
			<div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
				<div className="cart-sidebar-header">
					<h2>Cart</h2>
					<ReactButton type="button" className="close-button" btnText="&times;" onClick={toggleSidebar} />
				</div>
				<div className="cart-sidebar-content">
					{cart.length === 0 ? (
						<p className="empty-cart">Your cart is empty.</p>
					) : (
						cart.map((product) => (
							<div key={product.id} className="cart-item">
								<a href={`/product/${product.id}`}>
									<img src={product.image} alt={product.name} className="cart-item-image" />
								</a>
								<div className="cart-item-details">
									<a href={`/product/${product.id}`} className="cart-item-name">
										{product.name}
									</a>
									<div className="cart-item-price">
										{product.quantity} x <span>${product.SALE_PRICE}</span>
									</div>
									<div className="cart-item-quantity">
										<button onClick={() => handleDecrement(product.id)}>-</button>
										<input type="text" readOnly value={product.quantity} />
										<button onClick={() => handleIncrement(product.id)}>+</button>
									</div>
								</div>
								<button className="remove-button" onClick={() => handleRemove(product.id)}>
									&times;
								</button>
							</div>
						))
					)}
				</div>
				<div className="cart-sidebar-footer">
					<Link className="view-cart-button" to="/cart">
						View Cart<span className="total-price">${grandTotal.toFixed(2)}</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CartSidebar;
