import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity, setCart, clearCart } from "../../features/cartSlice";
import "../Pages.css";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		const savedCart = JSON.parse(localStorage.getItem("cart"));
		if (savedCart) {
			dispatch(setCart(savedCart));
		}
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const handleRemove = (id) => {
		dispatch(removeFromCart(id));
	};

	const handleIncrement = (id) => {
		dispatch(incrementQuantity(id));
	};

	const handleDecrement = (id) => {
		dispatch(decrementQuantity(id));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const grandTotal = cart.reduce((total, product) => total + product.SALE_PRICE * product.quantity, 0);

	return (
		<>
			<section className="hero-section">
				<h1>CART</h1>
			</section>
			<div className="container">
				<div className="cart-table-container">
					<table className="cart-table">
						<thead>
							<tr>
								<th>Image</th>
								<th>Product Name</th>
								<th>Unit Price</th>
								<th>Qty</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((product) => (
								<tr key={product.id}>
									<td>
										<a href={`/product/${product.id}`}>
											<img src={product.image} alt={product.name} className="cart-item-image" />
										</a>
									</td>
									<td>
										<a href={`/product/${product.id}`} className="cart-item-name">
											{product.name}
										</a>
									</td>
									<td>${product.SALE_PRICE.toFixed(2)}</td>
									<td>
										<div className="quantity-controls">
											<button onClick={() => handleDecrement(product.id)}>-</button>
											<input type="text" readOnly value={product.quantity} />
											<button onClick={() => handleIncrement(product.id)}>+</button>
										</div>
									</td>
									<td>${(product.SALE_PRICE * product.quantity).toFixed(2)}</td>
									<td>
										<button className="remove-button" onClick={() => handleRemove(product.id)}>
											&times;
										</button>
									</td>
								</tr>
							))}
							<tr>
								<td colSpan="6" className="grand-total">
									Grand Total: <span>${grandTotal.toFixed(2)}</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="cart-actions">
					<div className="coupon-container">
						<form className="coupon-form">
							<input type="text" placeholder="Enter your coupon code if you have one" className="coupon-input" />
							<button type="submit" className="apply-coupon-button">
								Apply Coupon
							</button>
						</form>
					</div>
					<div className="checkout-container">
						<button className="clear-cart-button" onClick={handleClearCart}>
							CLEAR CART
						</button>
						<button className="checkout-button">PROCEED TO CHECKOUT</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
