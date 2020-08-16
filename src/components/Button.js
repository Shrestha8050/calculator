import React from 'react';
import './button.css';
const isOperator = (value) => {
  return !isNaN(value) || value === '.' || value === '=';
};
const isEqual = (value) => {
  return value === '=';
};
const Button = ({ children, handleClick }) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(children) ? 'null' : 'operator'
      } ${isEqual(children) ? 'equal' : 'null'}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;
