import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-surface-metallic bg-background-dark/95 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 relative rounded-full overflow-hidden border border-primary/50">
                        <Image
                            src="/profile.jpg"
                            alt="Andre Muniz"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h1 className="text-white text-lg font-bold tracking-tight">
                        Andre Muniz <span className="text-slate-500 font-normal">| Bubble.io Dev</span>
                    </h1>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Home</Link>
                    <Link className="text-white text-sm font-medium border-b-2 border-primary pb-0.5" href="#plugins">Plugins</Link>
                    <Link className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#templates">Templates</Link>
                    <Link className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#contact">Contact</Link>
                </nav>

                <Link
                    href="#contact"
                    className="hidden md:flex bg-primary hover:bg-[#0bcbcb] text-background-dark text-sm font-bold px-5 py-2 rounded transition-all shadow-[0_0_15px_rgba(13,242,242,0.3)] hover:shadow-[0_0_20px_rgba(13,242,242,0.5)]">
                    Hire Me
                </Link>

                {/* Mobile Menu Button - can add state later if needed */}
                <button className="md:hidden text-white" aria-label="Menu">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
