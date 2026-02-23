"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SocialShare from "@/components/SocialShare";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
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
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <span className="material-symbols-outlined text-green-400">phone_iphone</span>
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
                    Back to Blogs
                </Link>

                <article className="glass-panel p-6 md:p-12 overflow-hidden">
                    {post.coverImage && (
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 border border-white/10">
                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                        </div>
                    )}

                    <div className="mb-10 border-b border-white/10 pb-10">
                        <span className="text-bubble-cyan font-bold tracking-widest text-xs uppercase mb-4 block">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-400 font-light italic leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Markdown Content */}
                    <div
                        className="blog-content text-slate-300 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
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
                    <h2 className="text-3xl font-bold text-white mb-4">Want to build something similar?</h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">I help founders and companies build complex AI systems and high-performance Bubble apps.</p>
                    <button onClick={() => setContactOpen(true)} className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                        Let&apos;s Talk
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
                    <div className="flex gap-6">
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
