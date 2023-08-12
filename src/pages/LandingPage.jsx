import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";
import image from "../assets/Frame 33.svg";

export default function LandingPage() {
  return (
    <div className="LandingPage__container">
      <div className="LandingPage__innercontainer">
        <div className="LandingPage__innercontainer">
          <h1>You AI Assistant</h1>
          <h2>hello app</h2>
          <p>
            This software application is designed specifically for student
            enrollment purposes. It provides a streamlined and efficient process
            for students to enroll in educational programs.
          </p>
        </div>
        <div>
          <img src={image} alt="img.." className="LandingPage__image" />
        </div>
      </div>
      <Link to="/page2">
        <button className="Enroll-btn">Enroll Now</button>
      </Link>
    </div>
  );
}
