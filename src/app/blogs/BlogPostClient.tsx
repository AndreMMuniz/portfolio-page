"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SocialShare from "@/components/SocialShare";
import { useLanguage } from "@/components/LanguageContext";

interface BlogPost {
    slug: string;
    title: string;
    title_pt?: string;
    date: string;
    excerpt: string;
    excerpt_pt?: string;
    content: string;
    content_pt?: string;
    coverImage?: string;
}

/* ──────────────────────────────────────────────────── CONTACT MODAL ── */
function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
            <div className="glass-panel max-w-md w-full mx-4 p-8 relative animate-in fade-in" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
                <p className="text-slate-400 text-sm mb-6">Choose the best way to reach me:</p>

                <a href="mailto:m.andremuniz@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-bubble-cyan/50 hover:bg-bubble-cyan/5 transition-all mb-4 group">
                    <div className="h-12 w-12 rounded-full bg-bubble-cyan/10 flex items-center justify-center border border-bubble-cyan/20">
                        <span className="material-symbols-outlined text-bubble-cyan">mail</span>
                    </div>
                    <div>
                        <p className="text-white font-bold group-hover:text-bubble-cyan transition-colors">Email</p>
                        <p className="text-slate-400 text-sm">m.andremuniz@gmail.com</p>
                    </div>
                </a>

                <a href="https://wa.me/5513996118059" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all group">
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-white font-bold group-hover:text-green-400 transition-colors">WhatsApp</p>
                        <p className="text-slate-400 text-sm">+55 13 99611-8059</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
    const [contactOpen, setContactOpen] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-dark-bg">
            <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
            <Header openContact={() => setContactOpen(true)} />

            {/* ── Background Ambient Glows ── */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-bubble-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-ai-purple/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:px-10 lg:px-16 max-w-4xl mx-auto w-full">
                <Link href="/blogs" className="flex items-center gap-2 text-slate-400 hover:text-bubble-cyan transition-colors mb-8 group w-fit">
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    {t("btn.back_blogs")}
                </Link>

                <article className="glass-panel p-6 md:p-12 overflow-hidden">
                    {post.coverImage && (
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 border border-white/10">
                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                        </div>
                    )}

                    <div className="mb-10 border-b border-white/10 pb-10">
                        <span className="text-bubble-cyan font-bold tracking-widest text-xs uppercase mb-4 block">{new Date(post.date).toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                            {language === "pt" && post.title_pt ? post.title_pt : post.title}
                        </h1>
                        <p className="text-xl text-slate-400 font-light italic leading-relaxed">
                            {language === "pt" && post.excerpt_pt ? post.excerpt_pt : post.excerpt}
                        </p>
                    </div>

                    {/* Markdown Content */}
                    <div
                        className="blog-content text-slate-300 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{ __html: (language === "pt" && post.content_pt) ? post.content_pt : post.content }}
                    />

                    <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <SocialShare url={currentUrl} title={post.title} />
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full overflow-hidden border border-bubble-cyan/30">
                                <Image src="/profile.jpg" alt="Andre Muniz" width={48} height={48} className="object-cover" />
                            </div>
                            <div>
                                <p className="text-white font-bold">Andre Muniz</p>
                                <p className="text-slate-500 text-xs">Bubble Architect & AI Engineer</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* ── Related CTA ── */}
                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-bubble-cyan/10 to-ai-purple/10 border border-white/10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{t("cta.title")}</h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">{t("cta.desc")}</p>
                    <button onClick={() => setContactOpen(true)} className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                        {t("cta.btn")}
                    </button>
                </div>
            </main>

            {/* ── Footer ── */}
            <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md py-12 relative z-10 mt-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-white font-bold text-lg">Andre Muniz</span>
                        <span className="text-slate-500 text-sm">© {new Date().getFullYear()}. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6 items-center">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                            className="text-slate-600 hover:text-white transition-colors text-xs uppercase"
                            title="Toggle Language"
                        >
                            {language === 'en' ? 'PT' : 'EN'}
                        </button>
                        <Link className="text-slate-400 hover:text-white transition-colors" href="#">LinkedIn</Link>
                        <Link className="text-slate-400 hover:text-white transition-colors" href="#">Twitter</Link>
                        <Link className="text-slate-400 hover:text-white transition-colors" href="#">Github</Link>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        .blog-content h2 { font-size: 2rem; font-weight: 800; color: white; margin-top: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.025em; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 700; color: white; margin-top: 2.5rem; margin-bottom: 1.25rem; }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content strong { color: white; border-bottom: 1px solid rgba(13, 242, 242, 0.3); }
        .blog-content code { background: rgba(255, 255, 255, 0.05); padding: 0.2rem 0.4rem; rounded: 0.25rem; font-size: 0.9em; font-family: monospace; border: 1px solid rgba(255, 255, 255, 0.1); }
      `}</style>
        </div>
    );
}
