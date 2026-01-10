import React from "react";
import "./Button.css";

const Button = ({ Text = "", customStyle = {} }) => {
  return (
    <button customStyle={{}}>
      <a href="" target="_blank" rel="noopener noreferrer"></a>
      {Text}
    </button>
  );
};
export default Button;
