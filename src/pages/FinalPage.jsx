import React from "react";
import exitImage from "../assets/6493510.jpg";
import { useAuth } from "../Context";

export default function FinalPage() {
  const auth = useAuth();
  return (
    <div className="ExitPage__container background__img">
      <img src={exitImage} alt="img.." className="ExitImage" />
      <label htmlFor="name" className="ExitPage__label">
        Name: <span>{auth.user}</span>
      </label>
      <label htmlFor="name" className="ExitPage__label">
        Age: <span>{auth.age}</span>
      </label>
      <p>
        Your name {auth.user} aged {auth.age} has been added to student system.
        You may now exit.
      </p>
    </div>
  );
}
