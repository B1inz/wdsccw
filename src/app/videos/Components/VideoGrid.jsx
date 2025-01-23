import React from "react";
import styles from "/src/app/videos/Styles/VideoGrid.module.css";
import VideoCard from "./VideoCard";

const VideoGrid = ({videos}) => {

  return (
    <div className={styles.grid}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video}/>
      ))}
    </div>
  );
};

export default VideoGrid;