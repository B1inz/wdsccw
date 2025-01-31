import styles from "./page.module.css";

export default function Ward13() {
    return (
        <>
            {/* Full-width Banner */}
            <div className={styles.banner}>
                <img 
                    src="/ward13-banner.png" 
                    alt="Ward 13 Banner" 
                    className={styles.bannerImage} 
                />
            </div>

            {/* Main Content */}
            <div className={styles.bodyContainer}>
                <section className={styles.mapsSection}>
                    <h1 className={styles.sectionHeader}>Maps</h1>
                    <ul>
                        <li>
                            <details>
                                <summary className={styles.summary}>
                                    Appointment to Council Committees
                                </summary>
                                <div className={styles.mapContainer}>
                                    <a
                                        href="https://london.maps.arcgis.com/apps/webappviewer/index.html?id=0187f8a72f204edcbc95d595f31b5117"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Ward 13 - City of London Maps
                                    </a>
                                    <img
                                        src="/ward13map.png"
                                        alt="Map of Ward 13"
                                        className={styles.mapImage}
                                    />
                                </div>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className={styles.summary}>City of London</summary>
                                <p>Details about the City of London.</p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className={styles.summary}>Property Search</summary>
                                <p>Details about property search.</p>
                            </details>
                        </li>
                    </ul>
                </section>

                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionHeader}>Other Resources</h2>
                    <ul>
                        <li>
                            <details>
                                <summary className={styles.summary}>
                                    Council and Civic Administration
                                </summary>
                                <p>Details about council and civic administration.</p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className={styles.summary}>
                                    Appointment to Council Committees
                                </summary>
                                <p>Details about council and civic administration.</p>
                            </details>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}
