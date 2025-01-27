import React from "react";
import styles from "/src/app/videos/Styles/VideoCard.module.css"
const VideoCard = ({video}) =>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <a 
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
                >
                <img src={`/${video.thumbnail}`} alt={video.title} className={styles.img}/>
                </a>
                <div className={styles.text}>
                    <h1 className={styles.title}>{video.title}</h1>
                    <h2 className={styles.date}>{video.date}</h2>
                    <h3 className={styles.description}>{video.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;