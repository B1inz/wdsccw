"use client";
import { useState, useEffect } from "react";
import RSSParser from "rss-parser";
import DOMPurify from "dompurify";
import styles from "./page.module.css";
export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  useEffect(() => {
    const fetchRSS = async () => {
      const parser = new RSSParser();
      try {
        const response = await fetch(
          `https://corsproxy.io/?https://us8.campaign-archive.com/feed?u=d7d8421e0c331407035def386&id=2899bf3f73`
        );
        if (!response.ok) {
          throw new Error(
            `Network error: ${response.status} - ${response.statusText}`
          );
        }
        const xmlText = await response.text();
        const feed = await parser.parseString(xmlText);
        const items = feed.items
          .map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.content || item.contentSnippet || "",
          }))
          .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        setNewsItems(items);
        setFilteredItems(items);
      } catch (error) {
        console.error("Error fetching or parsing RSS feed:", error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRSS();
  }, []);
  const getSeasonFromDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month >= 8 && month <= 10) return `Fall ${year}`;
    if (month >= 5 && month <= 7) return `Summer ${year}`;
    if (month >= 2 && month <= 4) return `Spring ${year}`;
    if (month === 11 || month <= 1) return `Winter ${year}`;
    return "Previous Years";
  };
  const toggleFilter = (filter) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(newFilters);
    if (newFilters.length === 0) {
      setFilteredItems(newsItems);
    } else {
      setFilteredItems(
        newsItems.filter((item) =>
          newFilters.some(
            (filter) => getSeasonFromDate(item.pubDate) === filter
          )
        )
      );
    }
  };
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredItems]);
  const nextNewsletter = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };
  const prevNewsletter = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };
  return (
    <div className={styles.newsContainer}>
      <div className={styles.filterContainer}>
        <h2 className={styles.filterHeader}>Filter</h2>
        {[
          "Fall 2024",
          "Summer 2024",
          "Spring 2024",
          "Winter 2024",
          "Previous Years",
        ].map((filter) => (
          <div
            key={filter}
            className={styles.filterOption}
            onClick={() => toggleFilter(filter)}
          >
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              readOnly
            />
            {filter}
          </div>
        ))}
      </div>
      <div className={styles.newsContent}>
        <div className={styles.navigationButtons}>
          <button onClick={prevNewsletter}>&lt;</button>
          <button onClick={nextNewsletter}>&gt;</button>
        </div>
        <center>
          <h1 className={styles.headerNews}>Title of Newsletter</h1>
        </center>
        <center>
          <p className={styles.date}>Month, Day, Year</p>
        </center>
        {error ? (
          <p>Error loading newsletters. Please try again later.</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : filteredItems.length > 0 ? (
          <div className={styles.newsCard}>
            <div className={styles.newsHeader}>
              <a
                href={filteredItems[currentIndex].link}
                className={styles.newsTitle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {filteredItems[currentIndex].title}
              </a>
            </div>
            <p className={styles.newsDate}>
              {new Date(
                filteredItems[currentIndex].pubDate
              ).toLocaleDateString()}
            </p>
            <div
              className={styles.newsDescriptionContent}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  filteredItems[currentIndex].description
                ),
              }}
            ></div>
          </div>
        ) : (
          <p>No newsletters found.</p>
        )}
      </div>
    </div>
  );
}