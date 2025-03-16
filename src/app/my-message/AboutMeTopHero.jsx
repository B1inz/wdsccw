import React from 'react'
import styles from "./page.module.css"
export default function aboutMeTopHero() {
  return (
    <div>
        <div className={styles.aboutMeTopHero}>
            <div className={styles.aboutMeTopHeroText}>
                <p className={styles.aboutMeTopHeroMeet}>Meet</p>
                <h3 className={styles.aboutMeTopHeroName}>DAVID FERRERIA</h3>
                <hr className={styles.aboutMeTopHeroHR}/>
                <p className={styles.aboutMeTopHeroMeet}>WARD 13 CITY COUNCILLOR</p>
            </div>
        </div>
        <div className={styles.aboutMeTopHeroDescriptionContainer}>
            <p className={styles.aboutMeTopHeroDescription}>"I am honoured to have been elected and entrusted to serve my first term as a City Councillor representing Ward 13. I live in the ward, in Oxford Park, with my daughter and Claire, and I enjoy spending time with my family, friends, and serving members of our community."</p>
        </div>
        
    </div>
  )
}
