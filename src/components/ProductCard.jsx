import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import { addToCompare, removeFromCompare } from "../features/compareSlice";
import { useCartSidebar } from "../context/CartSidebarContext";
import "./Components.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiExpand } from "react-icons/bi";
import { IoGitCompareOutline } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import CartSidebar from "./CartSidebar";
import { AiOutlineDelete } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useSelector } from "react-redux";
import Modal from "./Modals/Modal";
import { Link } from "react-router-dom";

const ProductCard = ({ product, compare = [] }) => {
	const wishlistProducts = useSelector((state) => state.wishlist.products);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const dispatch = useDispatch();
	const { toggleCartSidebar } = useCartSidebar();
	const { addToCart: addProductToCart } = useContext(CartContext);

	const handleLike = (product) => {
		if (wishlistProducts.some((item) => item.id === product.id)) {
			dispatch(removeFromWishlist(product.id));
		} else {
			dispatch(addToWishlist(product));
		}
	};

	const handleExpand = (product) => {
		setSelectedProduct(product);
	};

	const handleCloseModal = () => {
		setSelectedProduct(null);
	};

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		addProductToCart(product);
		toggleCartSidebar();
	};

	const handleCompare = (product) => {
		if (compare.some((item) => item.id === product.id)) {
			dispatch(removeFromCompare(product.id));
		} else {
			dispatch(addToCompare(product));
		}
	};

	return (
		<div className="product-card">
			<div
				className={`product-card-inner ${hoveredIndex ? "hovered" : ""}`}
				onMouseEnter={() => setHoveredIndex(product.id)}
				onMouseLeave={() => setHoveredIndex(null)}
			>
				<div className="product-image-container">
					<Link to={`/product/${product.id}`}>
						<img src={hoveredIndex ? product.hoverimage : product.image} alt={product.name} className="product-image" />
					</Link>
					{product.discount && <div className="discount">{product.discount}</div>}
					{product.stokout && <div className="stokout Raleway">STOK OUT</div>}
					<button className="like" onClick={() => handleLike(product)}>
						{wishlistProducts.some((item) => item.id === product.id) ? <AiOutlineDelete className="delete" /> : <IoMdHeartEmpty />}
					</button>
					{hoveredIndex === product.id && (
						<>
							<div className="hoverd-icon">
								<div className="expand" onClick={() => handleExpand(product)}>
									<BiExpand />
								</div>
								<div className="compare" onClick={() => handleCompare(product)}>
									{compare.some((item) => item.id === product.id) ? <AiOutlineDelete className="delete" /> : <IoGitCompareOutline />}
								</div>
							</div>
							<div className="addToCart">
								<div className={`button Raleway ${product.stokout ? "disabled" : ""}`} onClick={() => handleAddToCart(product)}>
									{product.stokout ? (
										<>
											<HiShoppingCart style={{ fontSize: "20px" }} />
											<div>Out Of Stock</div>
										</>
									) : (
										<>
											<HiShoppingCart style={{ fontSize: "20px" }} />
											<div>Add To Cart</div>
										</>
									)}
								</div>
							</div>
						</>
					)}
				</div>
				<div className="product-details">
					<h3 className="product-title Raleway">
						<Link to={`/product/${product.id}`}>{product.name}</Link>
					</h3>
					<div className="product-price">
						<p className="MRP_PRICE">${product.MRP_PRICE}</p>
						<p className="SALE_PRICE">${product.SALE_PRICE}</p>
					</div>
				</div>
			</div>
			{selectedProduct && <Modal product={selectedProduct} isOpen={!!selectedProduct} onClose={handleCloseModal} />}
			<CartSidebar />
		</div>
	);
};

export default ProductCard;
