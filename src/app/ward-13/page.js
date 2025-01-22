import styles from "./page.module.css";

export default function Ward13() {
    return (
        <div className={styles.bodyContainer}>
            
           

         
            <section className={styles.mapsSection}>
                <h1 className={styles.sectionHeader}>Maps</h1>
                <ul>
                    <li>
                        <details>
                            <summary className={styles.summary}>
                                Appointment to Council Committees
                            </summary>
                            <div className={styles.dropdownContent}>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    Ward 13 on Google Maps
                                </a>
                                <img
                                    src="./path-to-map-image.png"
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
    );
}
