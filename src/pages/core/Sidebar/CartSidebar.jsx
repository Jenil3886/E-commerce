import React from "react";
import "../Sidebar.css";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

const CartSidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
			<div className="cart-sidebar-header">
				<h2>Cart</h2>
				<button className="close-button" onClick={toggleSidebar}>
					<RxCross1 />
				</button>
			</div>
			<div className="cart-sidebar-content">
				{/* Cart items will be displayed here */}
				<IoBagHandleOutline />
				<p>There Are no product</p>
			</div>
		</div>
	);
};

export default CartSidebar;
