import React from "react";

import { RxCross2 } from "react-icons/rx";
import ProductModal from "../productModal/ProductModal";

const Modal = ({ product, isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="modal-btn-close" onClick={onClose}>
					<RxCross2 className="modal-btn-close-icon" />
				</button>
				<div className="modal-body">
					<ProductModal product={product} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
