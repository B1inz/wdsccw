import React, { useState } from "react";
import styles from "./page.module.css"
export default function DropDownInfo(props) {


    



  return (
    <div  className={styles.dropDownContainer}>
    <details>
    <summary className={styles.summary}>
        <div className={styles.dropSubHeading}>
                <h3 className={styles.dropSubHeadingText}>{props.text.heading}</h3>
                
            </div>
            
            <hr  className={styles.dropLine}/>
    </summary>
    


    
      

        {props.text.subText.map(item => {
            return (

        <div key ={item.subHeading}>
            <ul className={styles.dropDownList}>

            <li className={styles.dropDownListItem}>
                <h4 className={styles.dropDownListItemSubHeading}>{item.subHeading}</h4>
                <p className={styles.dropDownListItemText}>{item.description}</p>
            </li>

        </ul>

        </div>
    









            )
        



        })}
        </details>
       
        

     
    </div>
  );
}
