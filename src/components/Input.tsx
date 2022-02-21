import React from "react";

const Input = (props: { label: string; type: string; }) => (
  <div className="input-wrapper">
    <label htmlFor={props.label.toLowerCase()}>{props.label}</label>
    <input type={props.type} id={props.label.toLowerCase()} />
  </div>
);

export default Input;
