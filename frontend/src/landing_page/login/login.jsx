import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful");

        // Replace with your dashboard URL
        window.location.href = "http://localhost:5173";
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to server");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background:
          "linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "25px",
                overflow: "hidden",
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "28px",
                    }}
                  >
                    🔐
                  </div>

                  <h2 className="fw-bold">Welcome Back</h2>

                  <p className="text-muted">
                    Login to your account
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {error && (
                    <div className="alert alert-danger py-2">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-bold"
                  >
                    Login
                  </button>
                </form>

                <p className="text-center mt-4 mb-0">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-decoration-none fw-bold"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>

            <p className="text-center text-white mt-4">
              © 2026 Zerodha Clone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}