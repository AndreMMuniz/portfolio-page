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
