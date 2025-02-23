import React, { useState } from "react";
import "./QuantitySelector.css";

const QuantitySelector = () => {
	const [quantity, setQuantity] = useState(1);

	const increment = () => setQuantity(quantity + 1);
	const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

	return (
		<div className="quantity-selector">
			<button onClick={decrement}>-</button>
			<input type="text" value={quantity} readOnly />
			<button onClick={increment}>+</button>
		</div>
	);
};

export default QuantitySelector;
