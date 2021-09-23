import React from "react";
import "./Inputs.css";
function Inputs(props) {
  return (
    <div className="InputWrper">
      <label className="InputLabel">
        {props.label}
        <input
          type={props.type}
          name="name"
          id= {props.id}
          className="inputField"
          placeholder={props.placeholder}
          value={props.value}
        />
      </label>
    </div>
  );
}

export default Inputs;
