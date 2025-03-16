import React from 'react'
import styles from './page.module.css'
import AboutMeTopHero from './AboutMeTopHero'
import TimeLine from './TimeLine'
import TimeLineContent from './TimeLineContent'
export default function page() {
  return (
    <div className={styles.aboutMePage}>
      <AboutMeTopHero/>
      {TimeLineContent.map((timeline, index) => <TimeLine content={timeline} key = {index} />)}
      <div style={{marginBottom: '50px'}}></div>
    </div>
  )
}
