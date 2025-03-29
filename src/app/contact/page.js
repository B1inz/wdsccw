"use client"; // Mark this as a client component

import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
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

  const [submissionCount, setSubmissionCount] = useState(0);
  const maxSubmissions = 3;

  // Load submission count from localStorage when the component mounts
  useEffect(() => {
    const savedCount = localStorage.getItem('submissionCount');
    if (savedCount) {
      setSubmissionCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submissionCount >= maxSubmissions) {
      alert('Submission limit reached. You cannot submit more than 3 messages.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormErrors({
        ...formErrors,
        email: 'Please enter a valid email address.',
      });
      return;
    }

    setFormErrors({ email: '' });

    const serviceID = 'service_pzpt2ea';
    const templateID = 'template_9iaz09e';
    const publicKey = '5aiKCjojtRSA7VLe7';

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert('Form submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          message: '',
        });

        const newCount = submissionCount + 1;
        setSubmissionCount(newCount);
        localStorage.setItem('submissionCount', newCount); // Store count in localStorage
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again later.');
      });
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
          disabled={submissionCount >= maxSubmissions}
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
          disabled={submissionCount >= maxSubmissions}
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
          disabled={submissionCount >= maxSubmissions}
        ></textarea>

        <button
          type="submit"
          className={styles.button}
          disabled={submissionCount >= maxSubmissions}
        >
          {submissionCount >= maxSubmissions ? 'Limit Reached' : 'Send'}
        </button>

        {submissionCount >= maxSubmissions && (
          <p className={styles.error}>
            You have reached the submission limit. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
