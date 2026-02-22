import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
                <Link href="/" className={styles.logo}>
                    André Muniz
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="#about" className={styles.navLink}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className={styles.navLink}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className={styles.navLink}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="#contact" className="btn-primary">
                        Contact me
                    </Link>
                </nav>
            </div>
        </header>
    );
}
