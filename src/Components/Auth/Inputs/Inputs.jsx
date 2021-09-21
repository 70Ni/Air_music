import React from "react";
import  './Inputs.css'
function Inputs(props) {
  return (
    <div className="InputWrper">
      <label className="InputLabel">
        {props.label}
        <input type={props.type} name="name" className="inputField" placeholder={props.placeholder}/ >
      </label>
    </div>
  );
}

export default Inputs;