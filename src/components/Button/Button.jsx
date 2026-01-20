import React from "react";
import "./Button.css";

const Button = ({ Text = "", customStyle = {} }) => {
  return (
    <button customStyle={{}}>
      <a
        href="https://pay.hotmart.com/F102947681Q?bid=1765125369986&fbclid=PAVERFWAOijFBleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAad6tHCZHFFnrqC-63zdJ_x8dud9m--P_OqWffFhNE3U4srN6pPJPyi8UYroqQ_aem_7H_IcdckxplUgx9SiJisWA"
        target="_blank"
        rel="noopener noreferrer"
      >
        {Text}
      </a>
    </button>
  );
};
export default Button;
