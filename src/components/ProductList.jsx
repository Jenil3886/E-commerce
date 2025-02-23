import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../helper/data";
import "./Components.css";

const ProductList = ({ filter, wishlist, setWishlist }) => {
	const filteredProducts = products.filter((product) => {
		if (filter === "New Arrival") return product.isNewArrival;
		if (filter === "Featured") return product.isFeatured;
		if (filter === "On Sale") return product.discount || product.isOnSale;
		if (filter === "Trending") return product.isTrending;
		return true;
	});

	return (
		<div className="product-card product" style={{ width: "100%" }}>
			{filteredProducts.map((product) => (
				<ProductCard key={product.id} product={product} wishlist={wishlist} setWishlist={setWishlist} />
			))}
		</div>
	);
};

export default ProductList;
