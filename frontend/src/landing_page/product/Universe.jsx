import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="mt-5">
          <button
            className="btn btn-primary btn-lg px-5"
            onClick={() => navigate("/signup")}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;