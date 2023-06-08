import React, { useState } from "react";
import { useAuth } from "../Context";

export default function Age({props}) {

  const auth=useAuth()
  const handleAgeChange = (event) => {
    auth.setingAge(event.target.value);
  };
  return (
    <div className="InputContainer">
      {/* {auth.user} */}
      <label>
        Age:
        <select value={auth.age} onChange={handleAgeChange} className="InputBox">
          <option value="">Select Age</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          {/* Add more age options as needed */}
        </select>
      </label>
      <button onClick={props.actionProvider.handleExit} className="Button-bot">submit</button>
    </div>
  );
}
