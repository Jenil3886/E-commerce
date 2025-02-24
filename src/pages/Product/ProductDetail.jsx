import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../../components/productModal/ProductSlider";
import QuantitySelector from "../../components/productModal/QuantitySelector";
import SocialShare from "../../components/productModal/SocialShare";
import ReactButton from "../../components/Buttons/button";
import { useDispatch } from "react-redux";
import { CartContext } from "../../context/CartContext";
import { addToCart } from "../../features/cartSlice";
import { addToWishlist } from "../../features/wishlistSlice";
import { addToCompare } from "../../features/compareSlice";
import { products } from "../../helper/data";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { addToCart: addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      const fetchedProduct = products.find((p) => p.id === Number(productId));
      setProduct(fetchedProduct);
    }
  }, [productId]);

  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, quantity };
    dispatch(addToCart(productWithQuantity));
    addProductToCart(productWithQuantity);
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
  };

  if (!product) {
    return <div>Loading... </div>;
  }

  return (
    <section className="product-details-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <div className="product-slider-container">
              <ProductSlider images={product.images || []} />
            </div>
          </div>
          <div className="col-md-6 col-lg-7">
            <div className="details-page">
              <p>
                <strong>SKU:</strong> {product.id}
              </p>
              <p>
                <strong>Availability: </strong>
                {product.availability}
              </p>
              <h2>{product.name}</h2>
              <div className="price">
                <del className="old">${product.MRP_PRICE}</del>
                <span className="new">${product.SALE_PRICE}</span>
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
              <div className="quantity-cart-button">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <ReactButton
                  type="button"
                  className="btn-cart"
                  onClick={() => handleAddToCart(product)}
                  btnText="Add to Cart"
                />
              </div>
              <div className="wishlist-compare-button">
                <ReactButton
                  type="button"
                  className="btn-wishlist"
                  onClick={() => handleAddToWishlist(product)}
                  btnText="Add to wishlist"
                />
                <ReactButton
                  type="button"
                  className="btn-compare"
                  onClick={() => handleAddToCompare(product)}
                  btnText="Add to Compare"
                />
              </div>
              <div className="share">
                <h4>Share:</h4>
                <SocialShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
