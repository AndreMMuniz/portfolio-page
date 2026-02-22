"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        {/* The user can replace this placeholder src with their actual profile image */}
                        <Image
                            src="/profile-placeholder.png"
                            alt="André Muniz"
                            fill
                            className={styles.profileImage}
                            onError={(e) => {
                                // Fallback if image doesn't exist
                                (e.currentTarget as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                </div>

                <div className={styles.heroText}>
                    <span className={styles.role}>Bubble Developer</span>
                    <h1 className={styles.title}>André Muniz</h1>
                    <p className={styles.description}>
                        Specialist in no-code development with Bubble. I transform ideas into powerful and scalable web applications, focusing on customized solutions that meet the specific needs of each client.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#contact" className="btn-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Let's talk
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
