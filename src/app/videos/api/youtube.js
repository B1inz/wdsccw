import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchVideos = async (searchQuery ="", channelId="") => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: "snippet",
                q: searchQuery,
                maxResults: 20,
                type: "video",
                key: API_KEY,
                order: "date",
                channelId: channelId,
            },
        });

    return response.data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        date: item.snippet.publishedAt,
        description:item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
        }));
    } 
    catch (error) {
        console.error("Error fetching videos:", error);
        return [];
    }
};