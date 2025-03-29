"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Verification email sent. Check your inbox!");
    } else {
      const errorData = await response.json();
      alert("Error: " + errorData.error);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending verification email.");
  }
  };


  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Verification Link</button>
      </form>
    </div>
  );
}
