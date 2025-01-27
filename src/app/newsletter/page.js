"use client";
import { useState, useEffect } from "react";
import RSSParser from "rss-parser";
import styles from "./page.module.css";
export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
//   const fetchRSS = async () => {
//     const parser = new RSSParser();
//     try {
//       // Fetch the feed using allorigins proxy
//       const response = await fetch(
//         `  https://corsproxy.io/?${encodeURIComponent(
//           "https://us8.campaign-archive.com/feed?u=d7d8421e0c331407035def386&id=2899bf3f73"
//         )}`
//       );
//       const data = await response.json();
      
//       // Parse the feed content (XML) from the `contents` field
//       const feed = await parser.parseString(data.contents);
//       console.log("Parsed Feed:", feed); // Debugging
      
//       // Map the items to extract relevant details
//       const items = feed.items.map((item) => ({
//         title: item.title,
//         link: item.link,
//         pubDate: item.pubDate,
//         description: item.contentSnippet || item.content,
//       }));
      
//       setNewsItems(items);
//     } catch (error) {
//       console.error("Failed to fetch RSS feed:", error.message);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };
const fetchRSS = async () => {
  const parser = new RSSParser();
  try {
    // Fetch the feed directly using the proxy
    const response = await fetch(
      `https://corsproxy.io/?https://us8.campaign-archive.com/feed?u=d7d8421e0c331407035def386&id=2899bf3f73`
    );

    if (!response.ok) {
      throw new Error(`Network error: ${response.status} - ${response.statusText}`);
    }

    // Confirm the response content type is XML
    const contentType = response.headers.get("content-type");
    if (!contentType.includes("application/rss+xml")) {
      throw new Error(`Unexpected content type: ${contentType}`);
    }

    // Get the XML response as text
    const xmlText = await response.text();

    // Use rss-parser to parse the XML feed
    const feed = await parser.parseString(xmlText);
    console.log("Parsed Feed:", feed); // Debugging

    // Map feed items into state
    const items = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet || item.content,
    }));

    setNewsItems(items);
  } catch (error) {
    console.error("Error fetching or parsing RSS feed:", error.message);
    setError(true);
  } finally {
    setLoading(false);
  }
};


  fetchRSS();
}, []);
  return (
    <div className={styles.newsContainer}>
      <div className={styles.filterSidebar}>
        <h2 className={styles.filterHeader}>Filter</h2>
        <ul className={styles.filterList}>
          <li>
            <input type="checkbox" id="fall2024" />{" "}
            <label htmlFor="fall2024">Fall 2024</label>
          </li>
          <li>
            <input type="checkbox" id="summer2024" />{" "}
            <label htmlFor="summer2024">Summer 2024</label>
          </li>
          <li>
            <input type="checkbox" id="spring2024" />{" "}
            <label htmlFor="spring2024">Spring 2024</label>
          </li>
          <li>
            <input type="checkbox" id="winter2024" />{" "}
            <label htmlFor="winter2024">Winter 2024</label>
          </li>
          <li>
            <input type="checkbox" id="previousYears" />{" "}
            <label htmlFor="previousYears">Previous Years</label>
          </li>
        </ul>
      </div>
      <div className={styles.newsContent}>
        <h1 className={styles.headerNews}>Recent Newsletters</h1>
        {error ? (
          <p>Error loading newsletters. Please try again later.</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : newsItems.length > 0 ? (
          <div className={styles.newsList}>
            {newsItems.map((item, index) => (
              <div className={styles.newsCard} key={index}>
                <div className={styles.newsImage}></div>
                <div className={styles.newsDetails}>
                  <a
                    href={item.link}
                    className={styles.newsTitle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                  <p className={styles.newsDate}>
                    {new Date(item.pubDate).toLocaleDateString()}
                  </p>
                  <p className={styles.newsDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No newsletters found.</p>
        )}
      </div>
    </div>
  );
}