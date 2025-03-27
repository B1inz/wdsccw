"use client"; // Mark this as a client component

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email field
    if (!validateEmail(formData.email)) {
      setFormErrors({
        ...formErrors,
        email: 'Please enter a valid email address.',
      });
      return;
    }

    // Clear errors if validation is successful
    setFormErrors({ email: '' });

    // Form submission logic here
    alert('Form submitted successfully!');
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="full-name" className={styles.label}>
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className={styles.input}
          required
        />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={styles.input}
          required
        />
        {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}

        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}
