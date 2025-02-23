import React from "react";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";

const product = {
	title: "Sofa for living room",
	oldPrice: 130.0,
	newPrice: 110.0,
	description:
		"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
	sizes: ["S", "M", "L"],
	colors: ["Red", "Blue", "Green"],
	images: [
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F1.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F1.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F1.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F1.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75",
		"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75",
	],
};

const Demo = () => {
	return (
		<div className="app" style={{ display: "flex" }}>
			<ProductSlider images={product.images} />
			<ProductDetails product={product} />
		</div>
	);
};

export default Demo;
