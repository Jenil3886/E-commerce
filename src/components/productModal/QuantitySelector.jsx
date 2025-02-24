import React from "react";
import "../Modals/Modal.css";
import ReactButton from "../Buttons/button";

const QuantitySelector = ({ quantity, setQuantity }) => {
	const handleIncrement = () => {
		if (quantity < 10) {
			setQuantity(quantity + 1);
		}
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className="quantity-selector">
			<ReactButton type="button" onClick={handleDecrement} btnText="-" disabled={quantity <= 1} />
			<input type="text" readOnly value={quantity} />
			<ReactButton type="button" onClick={handleIncrement} btnText="+" disabled={quantity >= 10} />
		</div>
	);
};

export default QuantitySelector;
