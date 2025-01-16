"use client";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.topSectionGrid}>
        

        <div className= {styles.topBannerContainer}>

          <div className = {styles.bannerText}>

            <h2 className = {styles.bannerTextHeading}>
              Passionate about <br/> building an affordable, <br/> sustainable, and <br/> connected London.
            </h2>

            <div className= {styles.bannerJoin}> 
              <p className= {styles.bannerJoinText} >Join David's Campaign</p> 
              <form className= {styles.bannerJoinForm}>
                <input className= {styles.bannerJoinFormInput}></input>
                <button className= {styles.bannerJoinFormButton}>SUBMIT</button>
              </form>
            
            </div>
            
          </div>

          <img src = "././councillorPhoto-noBackground.png" className= {styles.bannerPicture}></img>
        </div>
      




        <div className={`${styles.linkButtons} ${styles.volunteerButton}`}>
          <div className={styles.linkButtonText}>
            <svg
              width="48"
              height="48"
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
        {/*
        <div className={`${styles.linkButtons} ${styles.donateButton}`}>
          <div className={styles.linkButtonText}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.2546 15.4258C33.8031 14.1447 32.9785 13.0279 31.8869 12.2194C30.7953 11.4108 29.4868 10.9474 28.1296 10.8888H19.0556C17.2506 10.8888 15.5196 11.6058 14.2433 12.8821C12.967 14.1584 12.25 15.8894 12.25 17.6944C12.25 19.4993 12.967 21.2303 14.2433 22.5066C15.5196 23.7829 17.2506 24.4999 19.0556 24.4999H28.1296C29.9346 24.4999 31.6656 25.2169 32.9419 26.4932C34.2182 27.7695 34.9352 29.5005 34.9352 31.3055C34.9352 33.1104 34.2182 34.8414 32.9419 36.1177C31.6656 37.394 29.9346 38.111 28.1296 38.111H19.0556C17.6984 38.0524 16.3898 37.589 15.2983 36.7805C14.2067 35.9719 13.3821 34.8552 12.9306 33.574M23.5926 4.08325V10.8888M23.5926 38.111V44.9166"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>DONATE</p>
          </div>
        </div>

        */}
        <div className={`${styles.linkButtons} ${styles.contactButton}`}>
          <div className={styles.linkButtonText}>
            <svg
              width="48"
              height="48"
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
        <div className={`${styles.aboutMeContainer}`}>

            <p className={`${styles.aboutMeText}`}>
            <span className={styles.aboutMeBigText}>David Ferreira </span> 
            is the City Councillor for Ward<br></br>
            13 in London, Ontario. With a background rooted in <br></br>
            family values, having grown up in an entrepreneurial <br></br>
            environment with his immigrant parents. With <br></br>
            experience in both the corporate world and the gig <br></br>
            economy, Ferreira is committed to creating a sustainable, <br></br>
            inclusive, and affordable community. <br></br>
            
            
             </p>
            <img className={styles.aboutMeImage} src="councillorPhoto.png"></img>
        </div>
      <section>








      </section>
    </div>
  );
}
