import React from "react";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";

const ProductModal = ({ product }) => {
	return (
		<div className="app" style={{ display: "flex" }}>
			<ProductSlider images={product.images || []} />
			<ProductDetails product={product} />
		</div>
	);
};

export default ProductModal;
