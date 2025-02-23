import React from "react";
import ProductSlider from "./components/ProductSlider";
import ProductDetails from "./components/ProductDetails";

const product = {
	title: "Sofa for living room",
	oldPrice: 130.0,
	newPrice: 110.0,
	description:
		"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
	sizes: ["S", "M", "L"],
	colors: ["Red", "Blue", "Green"],
	images: ["https://via.placeholder.com/450", "https://via.placeholder.com/450", "https://via.placeholder.com/450"],
};

const Appapp = () => {
	return (
		<div className="app">
			<ProductSlider images={product.images} />
			<ProductDetails product={product} />
		</div>
	);
};

export default Appapp;
