import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />

        <h2 className="mb-3">INVEST IN EVERYTHING</h2>

        <p className="mb-4">
          Online platform to invest in stocks, bonds, and other securities
        </p>

        <button
          className="btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;