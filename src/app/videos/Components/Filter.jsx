import React from "react";
import styles from "/src/app/videos/Styles/Filter.module.css"
import { GrCheckbox } from "react-icons/gr";
import { IoCheckboxSharp } from "react-icons/io5";

const Filter= ({ selectedFilter, setFilter }) =>{
    const handleClick = (filterOption)=>{
        if (selectedFilter === filterOption){
            setFilter("");
        }
        else{
            setFilter(filterOption);
        }
    }
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Filter Videos</h1>
            {/* <span className={styles.line}> */}
            <button className={styles.filter} onClick={() => handleClick("Promotion")} >
                {selectedFilter === "Promotion" ?  <IoCheckboxSharp />: <GrCheckbox />} <span className={styles.text}/>Promotion</button>
            <button className={styles.filter} onClick={() => handleClick("Highlights") }>
                {selectedFilter === "Highlights" ?  <IoCheckboxSharp />: <GrCheckbox />}<span className={styles.text}/>City Highlights</button>
            <button className={styles.filter} onClick={() => handleClick("Other")}>
                {selectedFilter === "Other" ?  <IoCheckboxSharp />: <GrCheckbox />}<span className={styles.text}/>Other</button>
        </div>
    )
}

export default Filter;