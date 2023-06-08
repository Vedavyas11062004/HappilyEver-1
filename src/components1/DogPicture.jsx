// new file called DogPicture.jsx
import React, { useEffect, useState } from "react";
import "../App.css";
import { useAuth } from "../Context";

const DogPicture = ({ props }) => {
  const auth = useAuth();
  // const [name, setName] = useState("");
  return (
    <div className="InputContainer">
      {/* <button onClick={props.actionProvider.handleDog}>Hello user !</button> */}
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

export default DogPicture;
