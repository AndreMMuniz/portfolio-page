"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageContext";

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

export default function BlogsClient({ posts }: { posts: any[] }) {
    const [contactOpen, setContactOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-dark-bg">
            <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
            <Header openContact={() => setContactOpen(true)} />

            {/* ── Background Ambient Glows ── */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-ai-purple/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-bubble-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:px-10 lg:px-16 max-w-7xl mx-auto w-full">
                <div className="mb-16 border-b border-white/5 pb-12">
                    <span className="text-bubble-cyan font-bold tracking-widest text-sm uppercase mb-2 block">Insights & Thoughts</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        THE BLOG<span className="text-bubble-cyan">.</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-400 max-w-2xl font-light">
                        {language === "pt" ? "Mergulhos profundos em arquitetura No-Code, engenharia de IA e construção da próxima geração de produtos digitais." : "Deep dives into No-Code architecture, AI engineering, and building the next generation of digital products."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blogs/${post.slug}`} className="glass-panel group flex flex-col overflow-hidden hover:border-bubble-cyan/40 transition-all duration-500">
                            <div className="relative h-48 w-full overflow-hidden bg-slate-900/50">
                                {post.coverImage ? (
                                    <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <span className="material-symbols-outlined text-4xl text-slate-700">article</span>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-bubble-cyan border border-bubble-cyan/20">{t("blog.new_post")}</div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-xs text-slate-500 mb-2 font-mono uppercase">{new Date(post.date).toLocaleDateString()}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-bubble-cyan transition-colors mb-4 line-clamp-2">
                                    {language === "pt" && post.title_pt ? post.title_pt : post.title}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-grow">
                                    {language === "pt" && post.excerpt_pt ? post.excerpt_pt : post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-bubble-cyan font-bold text-sm">
                                    {t("blog.read_full")} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            {/* ── Footer ── */}
            <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md py-12 relative z-10 mt-auto">
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
                    </div>
                </div>
            </footer>
        </div>
    );
}
