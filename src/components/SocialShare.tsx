"use client";

import Link from "next/link";

interface SocialShareProps {
    url: string;
    title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
    const shareLinks = [
        {
            name: "LinkedIn",
            icon: "group",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: "hover:text-blue-500",
        },
        {
            name: "Facebook",
            icon: "face",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: "hover:text-blue-600",
        },
        {
            name: "Twitter",
            icon: "share",
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            color: "hover:text-sky-400",
        },
        {
            name: "Contra",
            icon: "work",
            href: `https://contra.com/share?url=${encodeURIComponent(url)}`, // Approximate, Contra sharing is often custom
            color: "hover:text-green-400",
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Share this post</span>
            <div className="flex gap-4">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all ${link.color} hover:bg-white/10 hover:border-white/20`}
                        title={link.name}
                    >
                        <span className="material-symbols-outlined text-lg">{link.icon}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
