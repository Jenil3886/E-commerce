import React from "react";

const ReactInput = ({ type, name, id, value, placeholder, onChange, className, labelName, lableClass, ...res }) => {
	return (
		<div className="theme--input-wrapper">
			<label htmlFor="" style={{ display: "block" }} className={`${lableClass}`}>
				{labelName}
			</label>
			<input type={type} name={name} id={id} {...res} value={value} placeholder={placeholder} onChange={onChange} className={className} />
		</div>
	);
};

export default ReactInput;
