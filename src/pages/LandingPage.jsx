import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div>this is landing page</div>
      <Link to="/page2">
        <button>Enroll</button>
      </Link>
    </>
  );
}
