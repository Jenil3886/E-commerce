import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare } from "../../features/compareSlice";
import { addToCart } from "../../features/cartSlice";
import "../Pages.css";
import { MdDeleteOutline } from "react-icons/md";
import { CartContext } from "../../context/CartContext";
import { useCartSidebar } from "../../context/CartSidebarContext";

const Compare = () => {
	const compare = useSelector((state) => state.compare);
	const dispatch = useDispatch();
	const { toggleCartSidebar } = useCartSidebar();
	const { addToCart: addProductToCart } = useContext(CartContext);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		addProductToCart(product);
		toggleCartSidebar();
	};

	if (compare.length === 0) {
		return <div className="no-products">No products selected for comparison.</div>;
	}

	return (
		<div className="compare-container container">
			<table className="compare-table">
				<tbody>
					<tr>
						<th>Product</th>
						{compare.map((product) => (
							<td key={product.id}>
								<button className="remove-button" onClick={() => dispatch(removeFromCompare(product.id))}>
									<MdDeleteOutline />
								</button>
								<div className="product-image">
									<img src={product.image} alt={product.name} />
								</div>
								<span className="product-name">{product.name}</span>
							</td>
						))}
					</tr>
					<tr>
						<th>Description</th>
						{compare.map((product) => (
							<td key={product.id}>{product.description}</td>
						))}
					</tr>
					<tr>
						<th>Price</th>
						{compare.map((product) => (
							<td key={product.id}>${product.SALE_PRICE}</td>
						))}
					</tr>
					<tr>
						<th>Variants</th>
						{compare.map((product) => (
							<td key={product.id}>{product.variants}</td>
						))}
					</tr>
					<tr>
						<th>Stock</th>
						{compare.map((product) => (
							<td key={product.id}>
								<span style={{ color: product.stokout ? "red" : "green", fontWeight: "700" }}>{product.stokout ? "Out of Stock" : "Available"}</span>
							</td>
						))}
					</tr>
					<tr>
						<th>Add to Cart</th>
						{compare.map((product) => (
							<td key={product.id}>
								<button className="add-to-cart-button" disabled={product.stokout} onClick={() => handleAddToCart(product)}>
									{product.stokout ? "Out of Stock" : "Add to Cart"}
								</button>
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Compare;
