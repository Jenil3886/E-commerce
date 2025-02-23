import React from "react";
import QuantitySelector from "./QuantitySelector";
import SocialShare from "./SocialShare";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
	return (
		<div className="product-details">
			<h2>{product.title}</h2>
			<div className="price">
				<del>${product.oldPrice}</del>
				<span>${product.newPrice}</span>
			</div>
			<p>{product.description}</p>
			<div className="options">
				<div className="size-selector">
					<label>Size</label>
					<select>
						{product.sizes.map((size, index) => (
							<option key={index} value={size}>
								{size}
							</option>
						))}
					</select>
				</div>
				<div className="color-selector">
					<label>Color</label>
					<select>
						{product.colors.map((color, index) => (
							<option key={index} value={color}>
								{color}
							</option>
						))}
					</select>
				</div>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
				<QuantitySelector />
				<button className="add-to-cart">Add to Cart</button>
			</div>
			<SocialShare />
		</div>
	);
};

export default ProductDetails;
