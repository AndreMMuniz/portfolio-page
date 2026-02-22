"use client";

import Image from 'next/image';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject() {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Featured Project</h2>
                    <p className={styles.sectionSubtitle}>
                        Discover my latest solution developed with Bubble, demonstrating expertise in no-code development.
                    </p>
                </div>

                <div className={styles.projectCard}>
                    <div className={styles.imageContainer}>
                        {/* Placeholder for the project screenshot */}
                        <div className={styles.imagePlaceholder}>
                            <span className={styles.placeholderText}>Project Screenshot Placeholder</span>
                            <Image
                                src="/project-placeholder.png"
                                alt="Service Management Plus"
                                fill
                                className={styles.projectImage}
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.projectInfo}>
                        <div className={styles.projectHeader}>
                            <h3 className={styles.projectTitle}>Service Management</h3>
                            <span className={styles.projectYear}>2025</span>
                        </div>

                        <p className={styles.projectDescription}>
                            Service provider management system developed for João Souza. A complete solution that simplifies management and optimizes processes.
                        </p>

                        <div className={styles.tags}>
                            <span className="tag">Bubble</span>
                            <span className="tag">API Integration</span>
                            <span className="tag">Responsive Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
