import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>André Muniz</h4>
                    <p className={styles.text}>
                        Bubble developer specializing in customized web solutions.
                    </p>
                    <div className={styles.social}>
                        <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            LinkedIn
                        </Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Navigation</h4>
                    <ul className={styles.navList}>
                        <li><Link href="#about" className={styles.navLink}>About</Link></li>
                        <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
                        <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Contact</h4>
                    <Link href="mailto:contact@example.com" className={styles.contactBtn}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                        Get in touch
                    </Link>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    <p className={styles.copyright}>
                        © {currentYear} André Muniz. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
