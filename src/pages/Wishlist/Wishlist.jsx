import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../features/wishlistSlice";
import "../Pages.css";
import { MdOutlineCancel } from "react-icons/md";
import { useCartSidebar } from "../../context/CartSidebarContext";
import { CartContext } from "../../context/CartContext";
import { addToCart } from "../../features/cartSlice";
import { BUTTONS_NAME } from "../../helper/constant";
import ReactButton from "../../components/Buttons/button";

const Wishlist = () => {
	const dispatch = useDispatch();
	const wishlistProducts = useSelector((state) => state.wishlist.products);

	const handleRemove = (id) => {
		dispatch(removeFromWishlist(id));
	};

	const { toggleCartSidebar } = useCartSidebar();
	const { addToCart: addProductToCart } = useContext(CartContext);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		addProductToCart(product);
		toggleCartSidebar();
	};

	if (!wishlistProducts.length) {
		return <div className="no-products">No products in your wishlist.</div>;
	}

	return (
		<div>
			<section className="hero-section">
				<h1>WISHLIST</h1>
			</section>
			<table className="wishlist-table container">
				<thead>
					<tr>
						<th>Image</th>
						<th>Product Name</th>
						<th>Until Price</th>
						<th>Add to Cart</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{wishlistProducts.map((product) => (
						<tr key={product.id}>
							<td>
								<a href={`/product/${product.id}`}>
									<img src={product.image} alt={product.name} className="wishlist-image" />
								</a>
							</td>
							<td>
								<a href={`/product/${product.id}`} className="wishlist-product-name">
									{product.name}
								</a>
							</td>
							<td>${product.SALE_PRICE}</td>

							<td>
								<ReactButton
									type="button"
									className="add-to-cart-button"
									disabled={product.stokout}
									onClick={() => handleAddToCart(product)}
									btnText={product.stokout ? BUTTONS_NAME.OUT_OF_STOCK : BUTTONS_NAME.ADD_TO_CART}
								/>
							</td>

							<td>
								<ReactButton type="button" className="remove-button" onClick={() => handleRemove(product.id)} iconImg={<MdOutlineCancel />} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Wishlist;
