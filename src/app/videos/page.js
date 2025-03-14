"use client";
import React, { useState, useEffect } from "react";
// import styles from "./page.module.css"
import VideoCard from "./Components/VideoCard";
import { fetchVideos } from "./api/youtube.js";
import Filter from "./Components/Filter";
import VideoGrid from "./Components/VideoGrid.jsx";
import styles from "/src/app/videos/Styles/VideoPage.module.css"
import Dropdown from "./Components/Dropdown.jsx";

export default function Videos() {
    const [videos, setVideos] = useState([]); // State for video array
    const [filter, setFilter] = useState(""); // State for filter
    
    const channelId = 'UCASTJPZgmGaskVMR6JWxtqw';

    useEffect(() => { 
        const loadVideos = async () =>{
            const fetchedVideos = await fetchVideos("", channelId);
            setVideos(fetchedVideos);
        }
        loadVideos();
    }, [filter])

    // useEffect(()=>{    sort videos based on key words (promotion, highlights, other)
        
    // })
    // const videosx = [
    //     {
    //       id: "6",
    //       title: "City of London",
    //       thumbnail: "tmb.jpg",
    //       date: "12,12,2025",
    //       description: "Description asdasdasdasdasdasdas n asdasdasdasdasdasdas n asdasdasdasdasdasdasddescription description description description description description description description description",
    //       keyword: "",
    //       // link: "https://youtu.be/xNRJwmlRBNU?si=XAIbqbk0G73a7IVJ",
    //     },
    //     {
    //       id: "5",
    //       title: "City of London",
    //       thumbnail: "tmb1.jpg",
    //       date: "12,12,2025",
    //       description: "Description description description description description description description description description description",
    //       keyword: "",
    //       // link: "https://youtu.be/xNRJwmlRBNU?si=XAIbqbk0G73a7IVJ",
    //     },
    //     {
    //       id: "4",
    //       title: "City of London",
    //       thumbnail: "tmb.jpg",
    //       date: "12,12,2025",
    //       description: "Description description description description description description description description description description",
    //       keyword: "",
    //     },
    //     {
    //       id: "3",
    //       title: "City of London",
    //       thumbnail: "tmb1.jpg",
    //       date: "12,12,2025",
    //       description: "Description description description description description description description description description description",
    //       keyword: "",
    //     },
    //     {
    //       id: "2",
    //       title: "City of London",
    //       thumbnail: "tmb.jpg",
    //       date: "12,12,2025",
    //       description: "Description description description description description description description description description description",
    //       keyword: "",
    //     },
    //     {
    //       id: "1",
    //       title: "City of London",
    //       thumbnail: "tmb1.jpg",
    //       date: "12,12,2025",
    //       description: "Description description description description description description description description description description",
    //       keyword: "",
    //     },
    //   ];
    return (
        
        <div className={styles.container}>   
            <Filter className={styles.filter} selectedFilter = {filter} setFilter={setFilter}></Filter>
            {/* <Dropdown className={styles.dropdown}>sss</Dropdown> */}
            <div className={styles.grid}>
                <h1><span className={styles.titlePage}>&nbsp;Videos&nbsp;</span></h1>
                <VideoGrid videos={videos}></VideoGrid>
            </div>
        </div>
    );
}