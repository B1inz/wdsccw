import React from "react";
import styles from "./page.module.css"


export default function TopHero() {
  return (
    <div>
      <section className={styles.topSectionGrid}>
       <div className={styles.topBannerContainer}>
       <div className={styles.bannerText}>
            <h2 className={styles.bannerTextHeading}>
              Passionate about <br /> building an affordable, <br />{" "}
              sustainable, and <br /> connected London.
            </h2>

            <div className={styles.bannerJoin}>
              <p className={styles.bannerJoinText}>Join David's Campaign</p>
              <form className={styles.bannerJoinForm}>
                <input className={styles.bannerJoinFormInput}></input>
                <button className={styles.bannerJoinFormButton}>SUBMIT</button>
              </form>
            </div>
          </div>

       </div>

       <div className={`${styles.linkButtons} ${styles.volunteerButton}`}>
          <div className={styles.linkButtonText}>
            <svg className={styles.topHeroSvgs}
              
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8004 14.0999H31.2004M16.8004 21.1499H31.2004M16.8004 28.1999H24.0004M13.1998 4.69995H34.8003C37.4513 4.69995 39.6003 6.80427 39.6003 9.40004L39.5997 37.6C39.5997 40.1957 37.4507 42.2999 34.7997 42.2999L13.1996 42.2998C10.5487 42.2998 8.39964 40.1956 8.39966 37.5998L8.39984 9.39992C8.39986 6.8042 10.5489 4.69995 13.1998 4.69995Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>VOLUNTEER</p>
          </div>
        </div>

        <div className={`${styles.linkButtons} ${styles.contactButton}`}>
          <div className={styles.linkButtonText}>
            <svg 
              className={styles.topHeroSvgs}
            
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.625 14.2917L28 26.1043L47.6875 14.2917M12.25 42.7102C9.35051 42.7102 7 40.3597 7 37.4602V16.9168C7 14.0173 9.35051 11.6667 12.25 11.6667H43.75C46.6495 11.6667 49 14.0173 49 16.9167V37.4602C49 40.3597 46.6495 42.7102 43.75 42.7102H12.25Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>CONTACT</p>
          </div>
        </div>
        
      </section>
    </div>
  );
}
