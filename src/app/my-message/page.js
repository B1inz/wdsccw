import React from 'react'
import styles from './page.module.css'
import AboutMeTopHero from './AboutMeTopHero'
import TimeLine from './TimeLine'
import TimeLineContent from './TimeLineContent'

export const metadata = {
  title: 'My Message',
  description: 'Learn about David Ferreira and the city he wants to create',
}

export default function page() {
  return (
    <div className={styles.aboutMePage}>
      <AboutMeTopHero/>
      {TimeLineContent.map((timeline, index) => <TimeLine content={timeline} key = {index} />)}
      <div style={{marginBottom: '50px'}}></div>
    </div>
  )
}
