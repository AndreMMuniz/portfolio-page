"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageContext";

/* ──────────────────────────────────────────────────────── DATA ── */
const PLUGINS = [
  { icon: "mood", title: "Custom Emoji Picker", title_pt: "Seletor de Emoji Customizado", desc: "A fully customizable and high-performance emoji picker for your Bubble.io apps.", desc_pt: "Um seletor de emojis totalmente personalizável e de alta performance para seus aplicativos Bubble.io.", imageSrc: "/custom-emoji-picker.jpg", href: "https://bubble.io/plugin/custom-emoji-picker-1771527860436x158441753496518660" },
  { icon: "slideshow", title: "Page to PPT", title_pt: "Página para PPT", desc: "Generate elegant PowerPoint presentations directly from Bubble groups and elements.", desc_pt: "Gere apresentações PowerPoint elegantes diretamente de grupos e elementos Bubble.", imageSrc: "/page-to-ppt.png", href: "https://bubble.io/plugin/group-to-pptx-1770740351933x224071802699907070" },
];

const TEMPLATES = [
  { title: "Multi-Channel CRM Chat Hub", title_pt: "Hub de Chat Multi-Canal CRM", tag: "CRM", desc: "Omni-channel customer support: WhatsApp, Intercom, and email all in one interface built on Bubble.", desc_pt: "Suporte omni-channel ao cliente: WhatsApp, Intercom e e-mail em uma única interface construída no Bubble.", imageSrc: "/crm-chat-hub.png", tags: ["Chat", "Support", "WhatsApp"], tags_pt: ["Chat", "Suporte", "WhatsApp"], href: "https://multichannel-chat-63131.bubbleapps.io/version-test" },
];

const NEXUS_TECH = [
  { icon: "account_tree", name: "LangGraph" },
  { icon: "bolt", name: "FastAPI" },
  { icon: "layers", name: "Next.js" },
  { icon: "api", name: "OpenAI" },
  { icon: "cloud", name: "Cloud AI" },
  { icon: "database", name: "PostgreSQL" },
  { icon: "terminal", name: "Python" },
];

const TECH_STACK = [
  { icon: "code", name: "Bubble" },
  { icon: "webhook", name: "n8n" },
  { icon: "account_tree", name: "LangGraph" },
  { icon: "link", name: "LangChain" },
  { icon: "layers", name: "Next.js" },
  { icon: "terminal", name: "Python" },
  { icon: "database", name: "PostgreSQL" },
  { icon: "api", name: "OpenAI" },
  { icon: "cloud", name: "Supabase" },
  { icon: "chat", name: "WhatsApp Cloud API" },
  { icon: "bolt", name: "FastAPI" },
];

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

/* ──────────────────────────────────────────────────────── PAGE ── */
export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── Background Ambient Glows ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-bubble-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-ai-purple/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <Header openContact={openContact} />


      <main className="relative z-10 pt-32 pb-20 px-4 md:px-10 lg:px-16 flex flex-col gap-24">

        {/* ── Hero Section ── */}
        <section className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t("hero.badge")}
            </div>
            {language === 'pt' ? (
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                ARQUITETO<span className="text-bubble-cyan">.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">BUBBLE</span> <br />
                <span className="text-ai-purple">&amp;</span> ENGENH. DE IA
              </h1>
            ) : (
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                BUBBLE<span className="text-bubble-cyan">.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">ARCHITECT</span> <br />
                <span className="text-ai-purple">&amp;</span> AI ENGINEER
              </h1>
            )}
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-light">
              {t("hero.desc")}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-bubble-cyan/10 border border-bubble-cyan/20 hover:bg-bubble-cyan/20 hover:border-bubble-cyan/50 transition-all" href="#bubble">
                <span className="material-symbols-outlined text-bubble-cyan">layers</span>
                <span className="font-bold text-bubble-cyan">{t("hero.btn.bubble")}</span>
              </Link>
              <Link className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-ai-purple/10 border border-ai-purple/20 hover:bg-ai-purple/20 hover:border-ai-purple/50 transition-all" href="#ai">
                <span className="material-symbols-outlined text-ai-purple">psychology</span>
                <span className="font-bold text-ai-purple">{t("hero.btn.ai")}</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]">
              <div className="absolute top-5 right-5 w-full h-full border border-ai-purple/30 rounded-2xl z-0" />
              <div className="absolute -bottom-5 -left-5 w-full h-full border border-bubble-cyan/30 rounded-2xl z-0" />
              <div className="glass-panel w-full h-full overflow-hidden relative z-10 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/90 z-20" />
                <div className="h-full w-full relative">
                  <Image src="/profile.jpg" alt="Andre Muniz" fill className="object-cover" priority />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h3 className="text-2xl font-bold text-white">Andre Muniz</h3>
                  <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-bubble-cyan" /> {t("hero.role1")}
                    <span className="w-1.5 h-1.5 rounded-full bg-ai-purple" /> {t("hero.role2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bubble Ecosystem ── */}
        <section className="w-full max-w-7xl mx-auto scroll-mt-24" id="bubble">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
            <div>
              <span className="text-bubble-cyan font-bold tracking-widest text-sm uppercase mb-2 block">{t("domain1.label")}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">{t("domain1.title")}</h2>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-slate-400 text-sm">{t("domain1.subtitle1")}</p>
              <p className="text-slate-500 text-xs mt-1">{t("domain1.subtitle2")}</p>
            </div>
          </div>

          {/* Featured Plugins */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-bubble-cyan">extension</span>
              {t("domain1.plugins")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {PLUGINS.map((plugin) => (
                <a key={plugin.title} href={plugin.href} target="_blank" rel="noopener noreferrer" className="glass-panel group p-1 hover:border-bubble-cyan/40 transition-colors duration-500 cursor-pointer">
                  <div className="relative h-40 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700" />
                    {plugin.imageSrc ? (
                      <Image src={plugin.imageSrc} alt={language === "pt" && plugin.title_pt ? plugin.title_pt : plugin.title} fill className="object-contain p-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <span className="material-symbols-outlined text-6xl text-bubble-cyan/50 relative z-10 group-hover:text-bubble-cyan transition-colors duration-300">{plugin.icon}</span>
                    )}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white border border-white/10 z-20">{t("domain1.plugin_badge")}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-bubble-cyan transition-colors">{language === "pt" && plugin.title_pt ? plugin.title_pt : plugin.title}</h3>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-2">{language === "pt" && plugin.desc_pt ? plugin.desc_pt : plugin.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Marketplace Templates */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-bubble-cyan">grid_view</span>
              {t("domain1.templates")}
            </h3>
            <div className="grid grid-cols-1 max-w-lg gap-6">
              {TEMPLATES.map((tmpl) => (
                <a key={tmpl.title} href={tmpl.href} target="_blank" rel="noopener noreferrer" className="glass-panel group p-1 hover:border-bubble-cyan/40 transition-colors duration-500 cursor-pointer">
                  <div className="relative h-56 rounded-xl overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">
                      <Image src={tmpl.imageSrc} alt={language === "pt" && tmpl.title_pt ? tmpl.title_pt : tmpl.title} fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white border border-white/10 z-10">{tmpl.tag}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-bubble-cyan transition-colors">{language === "pt" && tmpl.title_pt ? tmpl.title_pt : tmpl.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">{language === "pt" && tmpl.desc_pt ? tmpl.desc_pt : tmpl.desc}</p>
                    <div className="mt-4 flex gap-2">
                      {(language === "pt" && tmpl.tags_pt ? tmpl.tags_pt : tmpl.tags).map((tItem) => (
                        <span key={tItem} className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/5">{tItem}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Engineering ── */}
        <section className="w-full max-w-7xl mx-auto scroll-mt-24" id="ai">
          <div className="relative rounded-3xl border border-ai-purple/20 bg-gradient-to-b from-ai-dark/80 to-dark-bg overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ai-purple/10 blur-[100px] pointer-events-none" />
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="text-ai-purple font-bold tracking-widest text-sm uppercase mb-2 block">{t("domain2.label")}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{t("domain2.title")}</h2>
                  <p className="mt-4 text-slate-400 max-w-xl">
                    {t("domain2.desc")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {["smart_toy", "dataset", "memory"].map((ic) => (
                    <div key={ic} className="h-10 w-10 rounded-full border border-ai-purple/30 flex items-center justify-center bg-ai-purple/10">
                      <span className="material-symbols-outlined text-ai-purple text-xl">{ic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nexus AI Ops Center – Flagship */}
              <div className="glass-panel p-8 md:p-10 border-ai-purple/20 bg-black/20 mb-16 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ai-purple/20 text-ai-purple text-xs font-bold border border-ai-purple/30">{t("domain2.flagship")}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Nexus AI Ops Center</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {language === "pt" ? "Um hub de operações centralizado para gerenciar múltiplos agentes LLM. Recursos incluem controle de versão de prompts, análise de custo de tokens em tempo real e um construtor de fluxo visual para sequências LangGraph." : "A centralized operations hub for managing multiple LLM agents. Features include prompt versioning, real-time token cost analysis, and a visual workflow builder for LangGraph sequences."}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[t("domain2.bullet1"), t("domain2.bullet2"), t("domain2.bullet3")].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                          <span className="material-symbols-outlined text-ai-purple text-lg">check_circle</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Nexus Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {NEXUS_TECH.map((t) => (
                        <span key={t.name} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ai-purple/10 border border-ai-purple/20 text-xs text-ai-purple font-medium">
                          <span className="material-symbols-outlined text-sm">{t.icon}</span>
                          {t.name}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://ops.munizandre.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-semibold hover:text-ai-purple transition-colors w-fit"
                    >
                      {t("domain2.link")} <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video group-hover:border-ai-purple/50 group-hover:shadow-neon-purple transition-all duration-500">
                    <Image src="/nexus-ai-ops.png" alt="Nexus AI Ops Center" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Tech Marquee */}
              <div className="w-full overflow-hidden">
                <p className="text-center text-xs font-mono text-slate-500 mb-6 uppercase tracking-widest">{t("domain2.tech")}</p>
                <div className="relative flex w-full overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-ai-dark/90 to-transparent" />
                  <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-ai-dark/90 to-transparent" />
                  <div className="flex animate-marquee whitespace-nowrap gap-16 py-4">
                    {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                      <div key={`${tech.name}-${i}`} className="flex items-center gap-3 text-slate-300 font-bold text-xl">
                        <span className="material-symbols-outlined">{tech.icon}</span> {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-4xl mx-auto w-full py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("footer.cta.title1")} <span className="bg-gradient-to-r from-bubble-cyan to-ai-purple bg-clip-text text-transparent">{t("footer.cta.title2")}</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">{t("footer.cta.desc")}</p>
          <button onClick={openContact} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
            {t("footer.cta.btn")}
          </button>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-lg">Andre Muniz</span>
            <span className="text-slate-500 text-sm">© {new Date().getFullYear()}. {t("footer.rights")}</span>
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
    </div>
  );
}
