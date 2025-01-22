"use client";
import React, { useState, useEffect } from "react";
// import styles from "./page.module.css"
import VideoCard from "./Components/VideoCard";
import { fetchVideos } from "./api/youtube.js";
import Filter from "./Components/Filter";

export default function Videos() {
    const [videos, setVideos] = useState([]); // State for video array
    const [filter, setFilter] = useState(""); // State for filter
    const channelId = 'UCISglu-JC04IuYH13mfYHzw';

    useEffect(() => { 
        const loadVideos = async () =>{
            const fetchedVideos = await fetchVideos("", channelId);
            setVideos(fetchedVideos);
        }
        loadVideos();
    }, [filter])

    // useEffect(()=>{    sort videos based on key words (promotion, highlights, other)
        
    // })

    return (
        <div>   
            <Filter setFilter={setFilter}></Filter>
            

        {/* <div> */}
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
            )}
        </div> */}
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
            keyword: ""}}></VideoCard>
        <VideoCard video={{id:"DBTdA5wp7jQ",
            title: "Mongolian breakfast ",
            thumbnail:"tmb.jpg",
            date: "12,12,2025",
            description: "william william william william william william william william william william william william  william ddddd",
            keyword: ""}}></VideoCard>
        </div>
    );
}