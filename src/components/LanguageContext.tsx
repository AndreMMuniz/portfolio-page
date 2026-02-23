"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple dictionary for UI elements
const dictionary: Record<string, Record<string, string>> = {
    en: {
        "nav.home": "Home",
        "nav.bubble": "Bubble.io",
        "nav.ai": "AI Engineering",
        "nav.blogs": "Blogs",
        "nav.about": "About",
        "btn.talk": "Let's Talk",
        "btn.back_blogs": "Back to Blogs",
        "blog.new_post": "NEW POST",
        "blog.read_full": "Read Full Post",
        "blog.share": "Share this post",
        "cta.title": "Want to build something similar?",
        "cta.desc": "I help founders and companies build complex AI systems and high-performance Bubble apps.",
        "cta.btn": "Let's Talk",
        "modal.title": "Let's Connect",
        "modal.desc": "Choose the best way to reach me:",
        "prompt.title": "Tradução Disponível",
        "prompt.desc": "Notamos que você está acessando do Brasil. Deseja traduzir a página para Português?",
        "prompt.yes": "Sim, traduzir",
        "prompt.no": "Não, manter em Inglês",

        "hero.badge": "Open for select contracts",
        "hero.desc": "I build high-performance no-code applications and integrate complex AI architectures. From rapid MVP to scalable enterprise solutions.",
        "hero.btn.bubble": "Explore Bubble",
        "hero.btn.ai": "Explore AI",
        "hero.role1": "Full Stack No-Code",
        "hero.role2": "AI Systems",

        "domain1.label": "Domain 01",
        "domain1.title": "Bubble Ecosystem",
        "domain1.subtitle1": "Pixel-perfect • Responsive • Scalable",
        "domain1.subtitle2": "100% Projects Delivered",
        "domain1.plugins": "Featured Plugins",
        "domain1.templates": "Marketplace Templates",
        "domain1.plugin_badge": "Plugin",

        "domain2.label": "Domain 02",
        "domain2.title": "AI Engineering",
        "domain2.desc": "Architecting the intelligence layer. Building autonomous agents, fine-tuning LLMs, and creating seamless AI ops workflows.",
        "domain2.flagship": "FLAGSHIP PROJECT",
        "domain2.link": "Access Live Platform",
        "domain2.tech": "Technologies I Work With",
        "domain2.bullet1": "Custom Fine-Tuned Models",
        "domain2.bullet2": "Autonomous Agent Orchestration",
        "domain2.bullet3": "Vector Database Integration",

        "footer.cta.title1": "Ready to build the ",
        "footer.cta.title2": "future?",
        "footer.cta.desc": "Whether you need a Bubble MVP launched in weeks or a custom AI agent system, I can help you ship faster.",
        "footer.cta.btn": "Book a Consultation",
        "footer.rights": "All rights reserved."
    },
    pt: {
        "nav.home": "Início",
        "nav.bubble": "Bubble.io",
        "nav.ai": "Engenharia de IA",
        "nav.blogs": "Blogs",
        "nav.about": "Sobre",
        "btn.talk": "Vamos Conversar",
        "btn.back_blogs": "Voltar para Blogs",
        "blog.new_post": "NOVO POST",
        "blog.read_full": "Ler Post Completo",
        "blog.share": "Compartilhar este post",
        "cta.title": "Quer construir algo parecido?",
        "cta.desc": "Eu ajudo fundadores e empresas a construir sistemas de IA complexos e aplicativos Bubble de alta performance.",
        "cta.btn": "Vamos Conversar",
        "modal.title": "Vamos Conectar",
        "modal.desc": "Escolha a melhor forma de falar comigo:",
        "prompt.title": "Tradução Disponível",
        "prompt.desc": "Notamos que você está acessando do Brasil. Deseja traduzir a página para Português?",
        "prompt.yes": "Sim, traduzir",
        "prompt.no": "Não, manter",

        "hero.badge": "Disponível para seletos projetos",
        "hero.desc": "Eu construo aplicativos no-code de alta performance e integro arquiteturas complexas de IA. Do MVP rápido a soluções corporativas escaláveis.",
        "hero.btn.bubble": "Explorar Bubble",
        "hero.btn.ai": "Explorar IA",
        "hero.role1": "No-Code Full Stack",
        "hero.role2": "Sistemas de IA",

        "domain1.label": "Domínio 01",
        "domain1.title": "Ecossistema Bubble",
        "domain1.subtitle1": "Pixel-perfect • Responsivo • Escalável",
        "domain1.subtitle2": "100% de Projetos Entregues",
        "domain1.plugins": "Plugins em Destaque",
        "domain1.templates": "Templates do Marketplace",
        "domain1.plugin_badge": "Plugin",

        "domain2.label": "Domínio 02",
        "domain2.title": "Engenharia de IA",
        "domain2.desc": "Arquitetando a camada de inteligência. Construção de agentes autônomos, fine-tuning de LLMs e criação de fluxos de operações de IA fluidos.",
        "domain2.flagship": "PROJETO PRINCIPAL",
        "domain2.link": "Acessar Plataforma Ao Vivo",
        "domain2.tech": "Tecnologias com as quais trabalho",
        "domain2.bullet1": "Modelos Customizados em Fine-Tuning",
        "domain2.bullet2": "Orquestração de Agentes Autônomos",
        "domain2.bullet3": "Integração com Banco de Dados Vetorial",

        "footer.cta.title1": "Pronto para construir o ",
        "footer.cta.title2": "futuro?",
        "footer.cta.desc": "Seja um MVP em Bubble lançado em semanas ou um sistema customizado de agentes de IA, posso te ajudar a entregar mais rápido.",
        "footer.cta.btn": "Agende uma Consulta",
        "footer.rights": "Todos os direitos reservados."
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    // Load saved preference ideally
    useEffect(() => {
        const saved = localStorage.getItem("lang") as Language;
        if (saved && (saved === "en" || saved === "pt")) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("lang", lang);
    };

    const t = (key: string, section?: string) => {
        const dict = dictionary[language];
        if (dict && dict[key]) {
            return dict[key];
        }
        // Fallback to English
        return dictionary["en"][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
