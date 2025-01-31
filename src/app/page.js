"use client";
import React from "react";
import styles from "./page.module.css";
import TopHero from "./TopHero";
import AboutMe from "./AboutMe";
export default function Home() {
  return (
    <div>
      <TopHero />
      <AboutMe/>
      
    </div>
  );
}
