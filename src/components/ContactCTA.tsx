import Link from 'next/link';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Let's work together?</h2>
                <p className={styles.description}>
                    I am available for new projects and partnerships. Get in touch and let's turn your idea into reality using the power of Bubble.
                </p>
                <div className={styles.action}>
                    <Link href="mailto:contact@example.com" className="btn-primary">
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
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Start Project
                    </Link>
                </div>
            </div>
        </section>
    );
}
