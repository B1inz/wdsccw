import React from 'react'
import styles from './page.module.css'
export default function TimeLine(props) {

    const content = props.content
    const {image1, text1, image2, text2} = content;
    const {heading: heading1, description: description1} = text1
    const {heading: heading2, description: description2} = text2

    

  return (
    <div>

    {image1 ? 
    
        <div className={styles.timeLineImageContainer} >
            <img className={styles.timeLineImage} src= {image1}></img>
        </div>
        
        : ''
    }
    
      
      <div className={styles.timeLineHorizontalRuleContainer}><hr className={styles.timeLineHorizontalRule}/></div>
      
      {
        heading1 || description1 
        
        
        ? 
        
            <div className={styles.timeLineText}>
                {heading1?  <h2 className={styles.timeLineHeading}>{heading1}</h2>: ''}
                {description1 ? <p className={styles.timeLineDescription}>{description1}</p> : ''}
                
            </div>
        : ''
      }
      


    {image2 ? 
    
    <div className={styles.timeLineImageContainer} >
        <img className={styles.timeLineImage2} src= {image2}></img>
    </div>
    
    : ''
}
{
        heading2 || description2
        
        
        ? 
        
            <div className={styles.timeLineText}>
                {heading2?  <h2 className={styles.timeLineHeading}>{heading2}</h2>: ''}
                {description2 ? <p className={styles.timeLineDescription}>{description2}</p> : ''}
                
            </div>
        : ''
      }
      
    </div>
  )
}
