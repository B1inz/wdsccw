import React, { useState } from "react";
import styles from "./page.module.css"
export default function DropDownInfo(props) {

    const [isVisible, setIsVisible] = useState(false);


    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    



  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropSubHeading} onClick={toggleVisibility}>
            <h3 className={styles.dropSubHeadingText}>{props.text.heading}</h3>
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 21 18"
            fill="none"
            >
            <path d="M10.5 0L20.4593 17.25H0.540708L10.5 0Z" fill="#FF8D3D" />
            </svg>
        </div>
        
        <hr  className={styles.dropLine}/>

        {props.text.subText.map(item => {
            return (



                <div className={isVisible ? styles.visible : styles.hidden}>
            <ul className={styles.dropDownList}>

            <li className={styles.dropDownListItem}>
                <h4 className={styles.dropDownListItemSubHeading}>{item.subHeading}</h4>
                <p className={styles.dropDownListItemText}>{item.description}</p>
            </li>

        </ul>

        </div>









            )



        })}
       
        

     
    </div>
  );
}
