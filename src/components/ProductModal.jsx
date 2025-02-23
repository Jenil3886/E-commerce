import React from "react";
import "./Components.css";

const ProductModal = ({ product, isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="btn-close" onClick={onClose}>
					x
				</button>
				<div className="modal-body">
					<div className="row">
						<div className="col-md-6">
							<div className="product-image">
								<img src={product.image} alt={product.name} />
							</div>
						</div>
						<div className="col-md-6">
							<div className="product-details">
								<p>
									<strong>SKU:</strong> {product.sku}
								</p>
								<p>
									<strong>Availability:</strong> {product.availability}
								</p>
								<h2>{product.name}</h2>
								<div className="price">${product.price}</div>
								<p>{product.description}</p>
								<div className="quantity-cart-button">
									<button className="btn-decrement">-</button>
									<input type="text" readOnly value="1" size="12" />
									<button className="btn-increment">+</button>
									<button className="btn-cart">Add to Cart</button>
								</div>
								<div className="wishlist-compare-button">
									<button className="btn-wishlist">Add to wishlist</button>
									<button className="btn-compare">Add to Compare</button>
								</div>
								<div className="share">
									<h4>Share:</h4>
									<div className="media">
										<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
											Facebook
										</a>
										<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
											Twitter
										</a>
										<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
											Instagram
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;
