import { Code, LayoutTemplate, BriefcaseBusiness, ExternalLink, Blocks } from 'lucide-react';
import styles from './BubbleDeveloper.module.css';
import Link from 'next/link';

// Placeholder data - to be replaced by actual data source/CMS later
const PROJECTS = [
    { title: "Enterprise CRM Suite", type: "Client Project", desc: "A robust CRM system built entirely on Bubble capable of handling millions of rows with complex workflows.", link: "#" },
    { title: "Marketplace Platform", type: "Client Project", desc: "Multi-vendor marketplace featuring Stripe Connect integration and real-time messaging.", link: "#" },
];

const TEMPLATES = [
    { title: "SaaS Starter Kit", type: "Template", desc: "A comprehensive SaaS boilerplate with authentication, billing, and user dashboards out of the box.", price: "$49" },
    { title: "Directory Board", type: "Template", desc: "Modern directory listing template optimized for SEO and core web vitals.", price: "$29" }
];

const PLUGINS = [
    { title: "Advanced Rich Text", type: "Plugin", desc: "A highly customizable rich text editor plugin for Bubble applications.", installs: "5k+" },
    { title: "AWS S3 Multi-Uploader", type: "Plugin", desc: "Direct-to-S3 file uploader tackling Bubble's storage limits.", installs: "2k+" }
];

export default function BubbleDeveloper() {
    return (
        <section className="container" id="bubble-developer">
            <div className={styles.sectionHeader}>
                <div className={styles.iconWrapper}>
                    <Code className={styles.headerIcon} />
                </div>
                <h2 className={styles.title}>Bubble Developer</h2>
                <p className={styles.subtitle}>
                    Building scalable, pixel-perfect web applications using the world's leading visual programming platform.
                </p>
            </div>

            <div className={styles.contentGrid}>

                {/* Executed Projects */}
                <div className={styles.categoryColumn}>
                    <h3 className={styles.categoryTitle}>
                        <BriefcaseBusiness size={20} />
                        Executed Projects
                    </h3>
                    <div className={styles.cardsList}>
                        {PROJECTS.map((item, i) => (
                            <div key={i} className={`glass-panel ${styles.card}`}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardType}>{item.type}</span>
                                    <Link href={item.link} className={styles.extLink}>
                                        <ExternalLink size={16} />
                                    </Link>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Built Templates */}
                <div className={styles.categoryColumn}>
                    <h3 className={styles.categoryTitle}>
                        <LayoutTemplate size={20} />
                        Built Templates
                    </h3>
                    <div className={styles.cardsList}>
                        {TEMPLATES.map((item, i) => (
                            <div key={i} className={`glass-panel ${styles.card}`}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardType}>{item.type}</span>
                                    <span className={styles.badgeHighlight}>{item.price}</span>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <button className={styles.cardBtn}>View Template</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Built Plugins */}
                <div className={styles.categoryColumn}>
                    <h3 className={styles.categoryTitle}>
                        <Blocks size={20} />
                        Built Plugins
                    </h3>
                    <div className={styles.cardsList}>
                        {PLUGINS.map((item, i) => (
                            <div key={i} className={`glass-panel ${styles.card}`}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardType}>{item.type}</span>
                                    <span className={styles.badgeHighlight}>{item.installs} Installs</span>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <button className={styles.cardBtn}>View Plugin</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
