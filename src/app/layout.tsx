import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andre Muniz | Bubble Architect & AI Engineer",
  description: "I build high-performance no-code applications and integrate complex AI architectures. From rapid MVP to scalable enterprise solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${outfit.className} bg-dark-bg text-slate-200 antialiased selection:bg-bubble-cyan selection:text-black`}>
        <LanguageProvider>
          <AnalyticsTracker />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
