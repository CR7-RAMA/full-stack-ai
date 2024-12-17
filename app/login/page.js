"use client";

import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    // Client-only code here
    console.log("Running only on the client side.");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality not implemented yet!");
  };

  const handleForgotPassword = () => {
    alert("Redirect to forgot password page or functionality.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={styles.forgotButton}
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "350px",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    marginBottom: "0.5rem",
    display: "block",
    color: "#666666",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #dddddd",
    outline: "none",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#ffffff",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    marginTop: "1rem",
  },
  forgotButton: {
    backgroundColor: "transparent",
    color: "#0070f3",
    padding: "0.5rem",
    fontSize: "0.9rem",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    marginTop: "0.5rem",
    textAlign: "center",
  },
};
