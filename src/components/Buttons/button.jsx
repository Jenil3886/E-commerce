import React from "react";
import "../../index.css";

const ReactButton = ({
  type = "",
  className = "",
  btnText = "",
  iconImg = null,
  badgedText = "",
  badgedClass = "",
  ...res
}) => (
  <div>
    <button type={type} className={`${className} theme--btn`} {...res}>
      {iconImg && <span>{iconImg}</span>}
      {btnText}
      {!!String(badgedText) && <span className={badgedClass}>{badgedText}</span>}
    </button>
  </div>
);

export default ReactButton;
