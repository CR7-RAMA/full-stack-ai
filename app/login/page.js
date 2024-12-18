"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState(""); // Default values ensure consistency
  const [password, setPassword] = useState(""); // Default values ensure consistency
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        router.push("/");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirect to forgot password page or functionality.");
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <button
          type="button"
          onClick={handleSignupRedirect}
          style={styles.signupButton}
        >
          New User? Signup
        </button>
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
    color: "#333333", // Ensures input text is visible
    backgroundColor: "#ffffff",
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
  signupButton: {
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
