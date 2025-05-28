// import React from "react";
// import Link from "next/link";
// import styles from "./page.module.css";

// const Navbar = () => {
//     return(
//         <>
//             <nav className={styles.wrapper}>
//                 <Link href ="/" className={styles.logoImgLink}>
//                     <img className={styles.logoImg} src="logo.png"/>
//                 </Link>
//                 <div className={`${styles.navLinks} ${styles.links}`}>
//                     <a href="/ward-13" className={styles.links}>Ward 13</a>
//                     <div className={styles.dropdown}>
//                         <button className={styles.dropBtn}>About Me▾</button>
//                         <div className={styles.dropMenu}>
//                             <a href="/my-message" className={styles.links}>My Message</a>
//                             <a href="/contact" className={styles.links}>Contact</a>
//                         </div>
//                     </div>
//                     <div className={styles.dropdown}>
//                         <button className={styles.dropBtn}>Join▾</button>
//                         <div className={styles.dropMenu}>
//                             <a href="/volunteer" className={styles.links}>Volunteer</a>
//                             <a href="/newsletter" className={styles.links}>Newsletter</a>
//                         </div>

//                     </div>
//                     <a href="/news" className={styles.links}>News</a>
//                     <a href="/videos" className={styles.links}>Videos</a>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar
"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className={styles.wrapper}>
        <Link href="/" className={styles.logoImgLink}>
          <img className={styles.logoImg} src="logo.png" />
        </Link>
        {/* Hamburger for mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>
        {/* Desktop nav links */}
        <div className={`${styles.navLinks} ${styles.links}`}>
          {/* ...your existing nav links... */}
          <a href="/ward-13" className={styles.links}>
            Ward 13
          </a>
          <div className={styles.dropdown}>
            <button className={styles.dropBtn}>About Me▾</button>
            <div className={styles.dropMenu}>
              <a href="/my-message" className={styles.links}>
                My Message
              </a>
              <a href="/contact" className={styles.links}>
                Contact
              </a>
            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropBtn}>Join▾</button>
            <div className={styles.dropMenu}>
              <a href="/volunteer" className={styles.links}>
                Volunteer
              </a>
              <a href="/newsletter" className={styles.links}>
                Newsletter
              </a>
            </div>
          </div>
          <a href="/news" className={styles.links}>
            News
          </a>
          <a href="/videos" className={styles.links}>
            Videos
          </a>
        </div>
      </nav>
      {/* Sidebar overlay */}
      <div
        className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.open : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Sidebar drawer */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <button
          className={styles.closeSidebar}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <a
          href="/ward-13"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          Ward 13
        </a>
        <a
          href="/my-message"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          My Message
        </a>
        <a
          href="/contact"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          Contact
        </a>
        <a
          href="/volunteer"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          Volunteer
        </a>
        <a
          href="/newsletter"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          Newsletter
        </a>
        <a
          href="/news"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          News
        </a>
        <a
          href="/videos"
          className={styles.links}
          onClick={() => setSidebarOpen(false)}
        >
          Videos
        </a>
      </div>
    </>
  );
};

export default Navbar;
