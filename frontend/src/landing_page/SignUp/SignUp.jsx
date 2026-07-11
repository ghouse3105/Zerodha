import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

 if (response.ok) {
  alert("Account created successfully");

  localStorage.setItem(
    "user",
    JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
    })
  );

 window.location.href = "https://zerodha-dashboard-l7nm.onrender.com";
} else {
      setError(data.message);
    }
  } catch (error) {
    console.error(error);
    setError("Server not reachable");
  }
};

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background:"#cdd7e0",
          
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div
              className="card border-0 shadow-lg"
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
                    🚀
                  </div>

                  <h2 className="fw-bold">Create Account</h2>
                  <p className="text-muted">
                    Join our platform and get started
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control form-control-lg"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

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
                      placeholder="Create password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control form-control-lg"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
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
                    onclick={() => navigate("/dashboard")}
                  >
                    Sign Up
                  </button>

                  <div className="text-center my-4 text-muted">
                    ─── OR ───
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg w-100"
                  >
                    Continue with Google
                  </button>
                </form>

                <p className="text-center mt-4 mb-0">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none fw-bold"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>

            <p className="text-center text-white mt-4">
              © 2026 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}