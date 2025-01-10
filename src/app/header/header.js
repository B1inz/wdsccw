import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Navbar = () => {
    return(
        <>
            <nav className={styles.wrapper}>
                <Link href ="/">
                    <img className={styles.logoImg} src="logo.png"/>
                </Link>
                <div className={styles.links}>
                    <a href="/ward-13" className={styles.links}>Ward 13</a>
                    <div className={styles.dropdown}>
                        <button className={styles.dropBtn}>About Me▾</button>
                        <div className={styles.dropMenu}>
                            <a href="/my-message" className={styles.links}>My Message</a>
                            <a href="/contact" className={styles.links}>Contact</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropBtn}>Join▾</button>
                        <div className={styles.dropMenu}>
                            <a href="/volunteer" className={styles.links}>Volunteer</a>
                            <a href="/newsletter" className={styles.links}>Newsletter</a>
                        </div>
                    </div>
                    <a href="/news" className={styles.links}>News</a>
                    <a href="/videos" className={styles.links}>Videos</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar