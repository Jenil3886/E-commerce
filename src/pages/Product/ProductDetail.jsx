import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const { productId } = useParams();

	// Fetch product details using the productId
	// For demonstration, we'll use a static product object
	const product = {
		id: productId,
		name: "Sample Product",
		description: "This is a sample product description.",
		price: 100,
		image: "https://via.placeholder.com/150",
	};

	return (
		<div className="product-detail">
			<h1>{product.name}</h1>
			<img src={product.image} alt={product.name} />
			<p>{product.description}</p>
			<p>Price: ${product.price}</p>
		</div>
	);
};

export default ProductDetail;
