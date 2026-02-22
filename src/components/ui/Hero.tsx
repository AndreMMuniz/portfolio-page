import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full max-w-[1280px] px-6 py-12 md:py-20 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-metallic border border-slate-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Available for freelance</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl relative z-10">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Future of No-Code</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Premium Plugins and Scalable Templates for the Bubble.io Ecosystem. Enhancing your development workflow with high-performance assets.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="#plugins"
                    className="flex items-center gap-2 bg-surface-metallic border border-slate-600 hover:border-primary text-white px-6 py-3 rounded font-medium transition-all group"
                >
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">extension</span>
                    Explore Plugins
                </Link>
                <Link
                    href="#templates"
                    className="flex items-center gap-2 bg-transparent border border-slate-700 hover:border-white text-slate-300 hover:text-white px-6 py-3 rounded font-medium transition-all group"
                >
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors">web</span>
                    View Templates
                </Link>
            </div>
        </section>
    );
}
