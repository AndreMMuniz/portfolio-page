"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

interface HeaderProps {
  openContact: () => void;
}

export default function Header({ openContact }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="glass-panel mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-bubble-cyan to-ai-purple text-white font-bold text-lg">A</div>
          <span className="font-bold tracking-tight text-white group-hover:text-bubble-cyan transition-colors">Andre Muniz</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/#bubble">{t("nav.bubble")}</Link>
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/#ai">{t("nav.ai")}</Link>
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/blogs">{t("nav.blogs")}</Link>
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/#about">{t("nav.about")}</Link>
        </nav>
        <button onClick={openContact} className="relative group/btn overflow-hidden rounded-lg bg-white/10 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-white/20 border border-white/5 hover:border-white/20">
          <span className="relative z-10">{t("btn.talk")}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-bubble-cyan/20 to-ai-purple/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        </button>
      </div>
    </header>
  );
}
