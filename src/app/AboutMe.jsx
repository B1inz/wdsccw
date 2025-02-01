import React from "react";
import styles from "./page.module.css"

export default function AboutMe() {
  return (
    <div>
      <section>
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
      </section>
    </div>
  );
}
