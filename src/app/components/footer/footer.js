"use client";
import React from "react";
import styles from "./page.module.css";

export default function Footer() {
    return (
        <div>
            {/* Newsletter Section */}
            <section className={styles.newsletterSection}>
                <div className={styles.container}>
                    {/* Left Section (Heading) */}
                    <h3 className={styles.heading}>Sign up for our newsletter</h3>

                    {/* Right Section (Form and Consent Text) */}
                    <div className={styles.formContainer}>
                        <form className={styles.newsletterForm}>
                            <input type="text" placeholder="Full name" className={styles.input} />
                            <input type="email" placeholder="Email" className={styles.input} />
                            <button type="submit" className={styles.submitButton}>Sign Up</button>
                        </form>
                        <p className={styles.consentText}>* I consent to receiving promotional emails</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
