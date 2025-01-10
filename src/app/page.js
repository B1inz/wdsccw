"use client";
import React from "react";
import Navbar from "./header/header";

export default function Home() {
    return (
        <div>
            <Navbar/>
            {/* Newsletter Section */}
            <section style={styles.newsletterSection}>
                <div style={styles.container}>
                    {/* Left Section (Heading) */}
                    <h3 style={styles.heading}>Sign up for our newsletter</h3>

                    {/* Right Section (Form and Consent Text) */}
                    <div style={styles.formContainer}>
                        <form style={styles.newsletterForm}>
                            <input type="text" placeholder="Full name" style={styles.input} />
                            <input type="email" placeholder="Email" style={styles.input} />
                            <button type="submit" style={styles.submitButton}>Sign Up</button>
                        </form>
                        <p style={styles.consentText}>* I consent to receiving promotional emails</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

// CSS-in-JS styles
const styles = {
    newsletterSection: {
        padding: "3rem",
        backgroundColor: "#145899",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Schibsted Grotesk', sans-serif", // Apply font to the whole section
    },
    container: {
        display: "flex",
        alignItems: "center",
        maxWidth: "1000px",
        width: "100%",
        margin: "0 auto",
    },
    heading: {
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "left",
        flex: "1", // Takes up space to the left
        paddingRight: "2rem", // Adds space between heading and the right section
        fontFamily: "'Schibsted Grotesk', sans-serif", // Ensure uniform font
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end", // Align form and text to the right
        flex: "2", // Takes more space than the heading
        fontFamily: "'Schibsted Grotesk', sans-serif", // Ensure uniform font
    },
    newsletterForm: {
        display: "flex",
        gap: "1rem",
        justifyContent: "flex-end",
        fontFamily: "'Schibsted Grotesk', sans-serif", // Ensure uniform font
    },
    input: {
        padding: "0.4rem 0.5rem", // Reduced padding for smaller textboxes
        borderRadius: "4px",
        border: "1px solid #ddd",
        fontSize: "0.9rem", // Slightly smaller font size
        minWidth: "200px",
        fontFamily: "'Schibsted Grotesk', sans-serif", // Ensure uniform font
    },
    submitButton: {
        padding: "0.4rem 2rem", // Wider button
        backgroundColor: "#f7941e",
        color: "#ffffff",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        cursor: "pointer",
        whiteSpace: "nowrap", // Ensures "Sign Up" stays in one line
        fontFamily: "'Schibsted Grotesk', sans-serif", // Ensure uniform font
    },
    consentText: {
        marginTop: "0.5rem",
        fontSize: "0.8rem",
        color: "#ffffff",
        fontFamily: "'Schibsted Grotesk', sans-serif", // Ensure uniform font
    },
};
