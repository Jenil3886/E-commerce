import React, { useState, useContext } from "react";
import QuantitySelector from "./QuantitySelector";
import SocialShare from "./SocialShare";
import "../Modals/Modal.css";
import { BUTTONS_NAME } from "../../helper/constant";
import ReactButton from "../Buttons/button";
import { useDispatch } from "react-redux";
import { CartContext } from "../../context/CartContext";
import { addToCart } from "../../features/cartSlice";

const ProductDetails = ({ product }) => {
	const dispatch = useDispatch();
	const { addToCart: addProductToCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = (product) => {
		const productWithQuantity = { ...product, quantity };
		dispatch(addToCart(productWithQuantity));
		addProductToCart(productWithQuantity);
	};

	return (
		<div className="product-details">
			<h2>{product.name}</h2>
			<div className="price">
				<del>${product.MRP_PRICE}</del>
				<span>${product.SALE_PRICE}</span>
			</div>
			<p>{product.description}</p>
			<div className="options">
				<div className="size-selector">
					<label>Size</label>
					<select>
						{(product.sizes || []).map((size, index) => (
							<option key={index} value={size}>
								{size}
							</option>
						))}
					</select>
				</div>
				<div className="color-selector">
					<label>Color</label>
					<select>
						{(product.colors || []).map((color, index) => (
							<option key={index} value={color}>
								{color}
							</option>
						))}
					</select>
				</div>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
				<QuantitySelector quantity={quantity} setQuantity={setQuantity} />
				<ReactButton
					type="button"
					className="add-to-cart"
					disabled={product.stokout}
					onClick={() => handleAddToCart(product)}
					btnText={product.stokout ? BUTTONS_NAME.OUT_OF_STOCK : BUTTONS_NAME.ADD_TO_CART}
				/>
			</div>
			<SocialShare />
		</div>
	);
};

export default ProductDetails;
