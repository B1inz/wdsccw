"use client";
import React from "react";
import styles from "./page.module.css";
import TopHero from "./TopHero";
import AboutMe from "./AboutMe";
import DropDownInfo from "./DropDownInfo";
import dropDownText from "./dropDownText";

export default function Home() {

  return (
    <div>
      <TopHero />
      <AboutMe/>
      {dropDownText.map((item, index)=> {
        console.log(item)
        return <DropDownInfo
        key = {index}
        text = {item}
       
      />})}
      
    
    </div>
  );
}
