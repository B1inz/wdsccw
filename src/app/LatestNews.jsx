import React from "react";
import styles from "./page.module.css";

export default function LatestNews(props) {
  console.log(props.news[0])
  return (
    <div className={styles.latestNews}>
      <h2 className={styles.latestNewsHeading}>Latest News</h2>
      <div className={styles.latestNewsGrid}>
      
      {props.news.map((item, index) => {
        return (
            <div key = {index} className={styles.latestNewsGridItem}>
              <h4 className={styles.latestNewsTitle}>{item.title}</h4>
              <p className={styles.latestNewsDate}>{new Date(item.pubDate).toLocaleDateString()}</p>
            </div>
         
        );
      })}
      
      
    </div>
  </div>
  );
}
