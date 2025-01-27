"use client";
import React, { useState, useEffect } from "react";
// import styles from "./page.module.css"
import VideoCard from "./Components/VideoCard";
import { fetchVideos } from "./api/youtube.js";
import Filter from "./Components/Filter";
import VideoGrid from "./Components/VideoGrid.jsx";
import styles from "/src/app/videos/Styles/VideoPage.module.css"

export default function Videos() {
    // const [videos, setVideos] = useState([]); // State for video array
    const [filter, setFilter] = useState(""); // State for filter
    
    // const channelId = 'UCISglu-JC04IuYH13mfYHzw';

    // useEffect(() => { 
    //     const loadVideos = async () =>{
    //         const fetchedVideos = await fetchVideos("", channelId);
    //         setVideos(fetchedVideos);
    //     }
    //     loadVideos();
    // }, [filter])

    // useEffect(()=>{    sort videos based on key words (promotion, highlights, other)
        
    // })
    const videosx = [
        {
          id: "6",
          title: "City of London",
          thumbnail: "tmb.jpg",
          date: "12,12,2025",
          description: "Description description description description description description description description description description",
          keyword: "",
        },
        {
          id: "5",
          title: "City of London",
          thumbnail: "tmb1.jpg",
          date: "12,12,2025",
          description: "Description description description description description description description description description description",
          keyword: "",
        },
        {
          id: "4",
          title: "City of London",
          thumbnail: "tmb.jpg",
          date: "12,12,2025",
          description: "Description description description description description description description description description description",
          keyword: "",
        },
        {
          id: "3",
          title: "City of London",
          thumbnail: "tmb1.jpg",
          date: "12,12,2025",
          description: "Description description description description description description description description description description",
          keyword: "",
        },
        {
          id: "2",
          title: "City of London",
          thumbnail: "tmb.jpg",
          date: "12,12,2025",
          description: "Description description description description description description description description description description",
          keyword: "",
        },
        {
          id: "1",
          title: "City of London",
          thumbnail: "tmb1.jpg",
          date: "12,12,2025",
          description: "Description description description description description description description description description description",
          keyword: "",
        },
      ];
      
    // setVideos(videosx)  
    return (
        
        <div className={styles.container}>   
            <Filter className={styles.filter} selectedFilter = {filter} setFilter={setFilter}></Filter>
            <div className={styles.grid}>
                <h1><span className={styles.titlePage}>&emsp;Videos&emsp;</span></h1>
                <VideoGrid videos={videosx}></VideoGrid>
            </div>
        {/* {videos.length === 0 ? (
        <p>Loading videos...</p>
        ) : (
        videos.map((video) => (
            <VideoCard
            key={video.id}
            title={video.title}
            date={video.publishedAt}
            description={video.description}
            thumbnail={video.thumbnail}
            />
        ))
        )} */}

        {/* <VideoCard video={{id:"DBTdA5wp7jQ",
            title: "Mongolian breakfast ",
            thumbnail:"tmb.jpg",
            date: "12,12,2025",
            description: "This is the Mongolian traditional breakfast. What do Mongolians eat for breakfast?",
            keyword: ""}}></VideoCard>
        <VideoCard video={{id:"DBTdA5wp7jQ",
            title: "Mongolian breakfast ",
            thumbnail:"tmb.jpg",
            date: "12,12,2025",
            description: "william william william william william william william william william william william william  william ddddd",
            keyword: ""}}></VideoCard>
        <VideoCard video={{id:"DBTdA5wp7jQ",
            title: "Mongolian breakfast ",
            thumbnail:"tmb.jpg",
            date: "12,12,2025",
            description: "william william william william william william william william william william william william  william ddddd",
            keyword: ""}}></VideoCard> */}
        </div>
    );
}