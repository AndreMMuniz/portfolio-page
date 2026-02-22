import { BrainCircuit, Cpu, Network, Sparkles, ExternalLink, Github } from 'lucide-react';
import styles from './AiEngineering.module.css';
import Link from 'next/link';

const AI_PROJECTS = [
    {
        title: "Nexus AI Ops Center",
        type: "Internal Tool",
        desc: "A centralized command center for monitoring, deploying, and managing various AI agents and LLM operations across different environments.",
        tech: ["Next.js", "Python", "LangChain"],
        link: "#"
    },
    {
        title: "Enterprise RAG System",
        type: "Production System",
        desc: "Retrieval-Augmented Generation pipeline integrating custom vector databases with OpenAI, providing highly accurate, context-aware responses from proprietary docs.",
        tech: ["Python", "Pinecone", "OpenAI"],
        link: "#"
    },
    {
        title: "Automated Workflow Engine",
        type: "Integration",
        desc: "Complex automation flows using n8n and custom Python scripts to orchestrate data between CRM platforms and AI processing models.",
        tech: ["n8n", "Python", "REST APIs"],
        link: "#"
    }
];

export default function AiEngineering() {
    return (
        <section className="container" id="ai-engineering">
            <div className={styles.sectionHeader}>
                <div className={styles.iconWrapper}>
                    <BrainCircuit className={styles.headerIcon} />
                </div>
                <h2 className={styles.title}>AI Engineering</h2>
                <p className={styles.subtitle}>
                    Architecting intelligent systems, automated workflows, and robust RAG pipelines.
                </p>
            </div>

            <div className="grid-cards">
                {AI_PROJECTS.map((item, i) => (
                    <div key={i} className={`glass-panel ${styles.aiCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardType}>
                                <Sparkles size={14} /> {item.type}
                            </div>
                            <div className={styles.links}>
                                <Link href={item.link} className={styles.iconLink} title="View Project">
                                    <ExternalLink size={18} />
                                </Link>
                            </div>
                        </div>

                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>

                        <div className={styles.techStack}>
                            {item.tech.map((t, idx) => (
                                <span key={idx} className="tag">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.opsCenterHighlight}>
                <div className={styles.opsContent}>
                    <div className={styles.opsBadge}>Featured Tool</div>
                    <h3 className={styles.opsTitle}>Nexus AI Ops Center</h3>
                    <p className={styles.opsDesc}>
                        The pinnacle of my internal toolset. Nexus AI Ops Center serves as the brain for managing distributed AI models, analyzing telemetry, and orchestrating complex continuous deployment pipelines for intelligent agents.
                    </p>
                    <button className="btn-primary">Learn More about Nexus</button>
                </div>
                <div className={styles.opsVisual}>
                    {/* Abstract visual representation of a network/brain */}
                    <div className={styles.nodeNetwork}>
                        <Network size={80} className={styles.networkIcon} strokeWidth={1} />
                        <div className={`${styles.pulseNode} ${styles.n1}`}></div>
                        <div className={`${styles.pulseNode} ${styles.n2}`}></div>
                        <div className={`${styles.pulseNode} ${styles.n3}`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
