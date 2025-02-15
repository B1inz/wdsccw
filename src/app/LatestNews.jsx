import React from "react";
import styles from "./page.module.css";

export default function LatestNews(props) {
  return (
    <div className={styles.latestNews}>
      <h2 className={styles.latestNewsHeading}>Latest News</h2>
      <div className={styles.latestNewsGrid}>
        <div className={styles.latestNewsGridItem}>
          <h4 className={styles.latestNewsTitle}>Title</h4>
          <p className={styles.latestNewsDate}>Date</p>
          <p className={styles.latestNewsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et rhoncus tellus. Suspendisse potenti. Sed ex tortor, tincidunt ac
            ullamcorper ultricies, varius a nibh. Vestibulum in odio nec enim
            efficitur.
          </p>
        </div>

        <div className={styles.latestNewsGridItem}>
          <h4 className={styles.latestNewsTitle}>Title</h4>
          <p className={styles.latestNewsDate}>Date</p>
          <p className={styles.latestNewsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et rhoncus tellus. Suspendisse potenti. Sed ex tortor, tincidunt ac
            ullamcorper ultricies, varius a nibh. Vestibulum in odio nec enim
            efficitur.
          </p>
        </div>

        <div className={styles.latestNewsGridItem}>
          <h4 className={styles.latestNewsTitle}>Title</h4>
          <p className={styles.latestNewsDate}>Date</p>
          <p className={styles.latestNewsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et rhoncus tellus. Suspendisse potenti. Sed ex tortor, tincidunt ac
            ullamcorper ultricies, varius a nibh. Vestibulum in odio nec enim
            efficitur.
          </p>
        </div>
      </div>
    </div>
  );
}
