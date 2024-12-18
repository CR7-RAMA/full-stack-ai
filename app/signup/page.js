"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Signup successful! Redirecting to login page.");
        router.push("/login");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Signup</h2>
        <form onSubmit={handleSignup} style={styles.form}>
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
            Signup
          </button>
          <button
            type="button"
            onClick={() => router.push("/login")}
            style={styles.loginButton}
          >
            Already have an account? Login
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
    color: "#333333", // Explicitly set input text color
    backgroundColor: "#ffffff", // Ensure background matches the card
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
  loginButton: {
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
