"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function AnalyticsTracker() {
    const { language, setLanguage } = useLanguage();
    const [showPrompt, setShowPrompt] = useState(false);
    const [sessionStartTime] = useState(Date.now());

    useEffect(() => {
        // 1. Check user location
        const checkLocation = async () => {
            // Don't show prompt if they already chose a language
            const savedLang = localStorage.getItem("lang");
            if (savedLang) return; // User already made a choice

            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();

                if (data.country_code === "BR" || data.country === "Brazil") {
                    setShowPrompt(true);
                }
            } catch (e) {
                console.error("Failed to fetch location", e);
            }
        };

        checkLocation();

        // 2. Setup Visit Analytics Tracking logic
        const trackVisit = async () => {
            try {
                // We get rough IP info from a free API, then send to our backend
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();

                // Register the visit start
                const payload = {
                    url: window.location.href,
                    pathname: window.location.pathname,
                    referrer: document.referrer,
                    timestamp: new Date().toISOString(),
                    ip: data.ip || 'unknown',
                    city: data.city || 'unknown',
                    region: data.region || 'unknown',
                    country: data.country_name || 'unknown',
                    userAgent: navigator.userAgent
                };

                // Send generic hit (we could also track duration by sending a beacon on unload)
                await fetch("/api/analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ type: "pageview", ...payload })
                });

            } catch (error) {
                console.error("Analytics error", error);
            }
        };

        trackVisit();

        // Track duration on leave
        const handleBeforeUnload = () => {
            const durationSeconds = Math.round((Date.now() - sessionStartTime) / 1000);

            // Use sendBeacon for reliable delivery on page exit
            const payload = JSON.stringify({
                type: "duration",
                pathname: window.location.pathname,
                durationSeconds,
                timestamp: new Date().toISOString()
            });

            navigator.sendBeacon("/api/analytics", payload);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const acceptTranslation = () => {
        setLanguage("pt");
        setShowPrompt(false);
    };

    const declineTranslation = () => {
        setLanguage("en");
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] max-w-sm bg-slate-900 border border-bubble-cyan/30 p-6 rounded-2xl shadow-2xl shadow-bubble-cyan/10 animate-in slide-in-from-bottom-5">
            <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-bubble-cyan/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-bubble-cyan">translate</span>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">Tradução Disponível</h4>
                    <p className="text-sm text-slate-400 mb-4">
                        Notamos que você está acessando do Brasil. Deseja traduzir a página para o Português?
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={acceptTranslation}
                            className="px-4 py-2 bg-bubble-cyan text-black text-sm font-bold rounded-lg hover:bg-[#0bcbcb] transition-colors"
                        >
                            Sim, traduzir
                        </button>
                        <button
                            onClick={declineTranslation}
                            className="px-4 py-2 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                        >
                            Não, obrigado
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
