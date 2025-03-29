"use client";
import { useState } from "react";
import styles from "./page.module.css";
import emailjs from "@emailjs/browser";

export default function SignupBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    const templateParams = {
      to_name: name,
      to_email: email,
      message: `Thank you, ${name}, for signing up for our newsletter!`,
    };

    emailjs
      .send(
        "service_eoofw7k", // Replace with your EmailJS service ID
        "template_sdukaur", // Replace with your EmailJS template ID
        templateParams,
        "DFXVJkWhobK2Lbphv" // Replace with your EmailJS public key
      )
      .then(() => {
        alert(
          `Thank you for signing up, ${name}! A confirmation email has been sent.`
        );
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send confirmation email. Please try again.");
      });
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Sign up for our Newsletter</h2>
      <form onSubmit={handleSignup} className={styles.signupForm}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}