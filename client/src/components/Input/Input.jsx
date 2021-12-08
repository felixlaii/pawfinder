import React from "react";
import "./input.scss";

function Input({ label, name, type }) {
  return (
    <div className="input-field">
      <label htmlFor={name} className="input-field__label">
        {label}
      </label>
      <input type={type} id={name} name={name} className="input-field__input" />
    </div>
  );
}

export default Input;
