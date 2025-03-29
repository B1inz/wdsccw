import styles from "./page.module.css";

export const metadata = {
    title: 'Ward 13',
    description: 'Learn more about ward 13',
};

export default function Ward13() {
    return (
        <>
            <div className={styles.banner}>
                <img 
                    src="/ward13-banner.png" 
                    alt="Ward 13 Banner" 
                    className={styles.bannerImage} 
                />
            </div>

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
                                <div style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            <a 
                                                href="https://london.maps.arcgis.com/apps/webappviewer/index.html?id=20327d3bcfb34bb488a7c3f74c05d2d3" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                City of London Zoning Map
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://london.maps.arcgis.com/apps/webappviewer/index.html?id=0187f8a72f204edcbc95d595f31b5117" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                City of London Maps
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://ir.lib.uwo.ca/mdc-London-maps/" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                London Historical Map Collection 1800-1900
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className={styles.summary}>Property Search</summary>
                                <div style={{ textAlign: "left" }}>
                                    <a
                                        href="https://bdp.london.ca/citizenportal/app/public-search"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        City of London Property Inquiry System
                                    </a>
                                </div>
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
                                <div style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://pub-london.escribemeetings.com/?MeetingViewId=1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                Council and Standing Committee Meetings and Agendas
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://pub-london.escribemeetings.com/?MeetingViewId=2&Year=2025"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                Advisory and other Committee Meetings and Agendas
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://london.ca/government/council-civic-administration"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                Quick Links
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className={styles.summary}>
                                    City of London Service Portal
                                </summary>
                                <div style={{ textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://service.london.ca/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                Service Portal
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </details>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}
