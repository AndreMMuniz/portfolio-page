import styles from './TechMarquee.module.css';

const TECH_STACK = [
    "Bubble", "n8n", "LangChain", "Next.js", "Python",
    "TypeScript", "React", "PostgreSQL", "Supabase", "OpenAI API"
];

export default function TechMarquee() {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {/* Double array for infinite scroll effect */}
                {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
}
