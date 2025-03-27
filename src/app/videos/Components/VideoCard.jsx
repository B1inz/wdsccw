import React from "react";
import styles from "/src/app/videos/Styles/VideoCard.module.css"
const VideoCard = ({video}) =>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                {/* <iframe className={styles.video}        HARD CODED VIDEO!!!!!
                    src="https://www.youtube.com/embed/WyVOGYVfN2o?si=nCnA4NT-NXlPMOXT" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe> */}

                <iframe className={styles.video} 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>

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