import React from "react";
import "../style.css";

const ReactInput = ({ type, name, id, ...res }) => {
	return (
		<div className="theme--input-wrapper">
			<input type={type} name={name} id={id} {...res} />
		</div>
	);
};

export default ReactInput;
