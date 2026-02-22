"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, ArrowRight, Code2, BrainCircuit } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            {/* Background elements for depth */}
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>

            <div className={`container ${styles.heroContent}`}>
                <div className={`${styles.heroText} animate-fade-in`}>
                    <div className={styles.badges}>
                        <span className="tag delay-100">
                            <Code2 size={14} className={styles.icon} /> Bubble Developer
                        </span>
                        <span className="tag delay-200">
                            <BrainCircuit size={14} className={styles.icon} /> AI Engineer
                        </span>
                    </div>

                    <h1 className={`${styles.title} delay-200`}>
                        Hi, I'm <span className="text-gradient">André Muniz</span>
                    </h1>

                    <p className={`${styles.description} delay-300`}>
                        I bridge the gap between rapid application development and cutting-edge artificial intelligence.
                        From building scalable no-code solutions in Bubble to architecting advanced AI operations,
                        I transform complex problems into intelligent, user-centric ecosystems.
                    </p>

                    <div className={`${styles.actions} delay-300`}>
                        <Link href="#contact" className="btn-primary">
                            <Mail size={18} />
                            Let's Talk
                        </Link>

                        <Link href="https://www.linkedin.com/in/andre-muniz-31697a63/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            <Linkedin size={18} />
                            LinkedIn
                            <ArrowRight size={16} className={styles.arrow} />
                        </Link>
                    </div>
                </div>

                <div className={`${styles.imageWrapper} animate-fade-in delay-200`}>
                    <div className={styles.imageContainer}>
                        <div className={styles.glowEffect}></div>
                        <div className={styles.profileWrapper}>
                            <Image
                                src="/profile.jpg"
                                alt="André Muniz"
                                fill
                                className={styles.profileImage}
                                priority
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    (e.currentTarget as HTMLImageElement).src = '/profile-placeholder.png';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
