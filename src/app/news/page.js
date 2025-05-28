"use client";
import { useState, useEffect } from "react";
import RSSParser from "rss-parser";
import styles from "./page.module.css";
import emailjs from "@emailjs/browser";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchRSS = async () => {
      const parser = new RSSParser();
      try {
        const response = await fetch(
          "https://corsproxy.io/?https://us8.campaign-archive.com/feed?u=d7d8421e0c331407035def386&id=2899bf3f73"
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
            thumbnail: item.enclosure?.url || "default-thumbnail.jpg",
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

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const templateParams = {
      to_email: email,
      message: "Thank you for signing up for our newsletter!",
    };

    emailjs
      .send(
        "service_eoofw7k", // Replace with your EmailJS service ID
        "template_sdukaur", // Replace with your EmailJS template ID
        templateParams,
        "DFXVJkWhobK2Lbphv" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert(
            `Thank you for signing up, ${email}! A confirmation email has been sent.`
          );
          setEmail("");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send confirmation email. Please try again.");
        }
      );
  };

  return (
    <div className={styles.newsContainer}>
      {/* Main Content Layout */}
      <div className={styles.mainContent}>
        {/* Filter Section (Left) */}
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

        {/* News Section (Right) */}
        <div className={styles.newsContent}>
          {selectedNews ? (
            <div className={styles.newsDetail}>
              <button
                className={styles.backButton}
                onClick={() => setSelectedNews(null)}
              >
                ← Back
              </button>
              <h2 className={styles.newsTitle}>{selectedNews.title}</h2>
              <p className={styles.newsDate}>
                {new Date(selectedNews.pubDate).toLocaleDateString()}
              </p>
              <img
                src={selectedNews.thumbnail}
                alt="Thumbnail"
                className={styles.thumbnailLarge}
              />
              <div
                className={styles.newsDescriptionContent}
                dangerouslySetInnerHTML={{ __html: selectedNews.description }}
              ></div>
            </div>
          ) : (
            <div className={styles.newsGrid}>
              {error ? (
                <p>Error loading newsletters. Please try again later.</p>
              ) : loading ? (
                <p>Loading...</p>
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className={styles.newsCard}
                    onClick={() => setSelectedNews(item)}
                  >
                    <img
                      src="/attachment_720.jpg"
                      alt="Thumbnail"
                      className={styles.newsThumbnail}
                    />
                    <h3 className={styles.newsTitle}>{item.title}</h3>
                    <p className={styles.newsDate}>
                      {new Date(item.pubDate).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p>No newsletters found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
