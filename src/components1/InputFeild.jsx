import React from "react";
import "../App.css";
import { useAuth } from "../Context";

const InputFeild = ({ props }) => {
  const auth = useAuth();
  return (
    <div className="InputContainer">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          className="InputBox"
          onChange={(e) => {
            auth.setingName(e.target.value);
          }}
        />
      </label>
      <button onClick={props.actionProvider.handleSubmit} className="Button-bot">submit</button>
    </div>
  );
};

export default InputFeild;
