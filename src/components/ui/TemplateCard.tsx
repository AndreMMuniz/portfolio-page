import Image from "next/image";

interface TemplateCardProps {
    imageSrc: string;
    imageAlt: string;
    tag1: string;
    tag2: string;
    title: string;
    description: string;
    price: string;
    demoLink?: string;
}

export default function TemplateCard({ imageSrc, imageAlt, tag1, tag2, title, description, price }: TemplateCardProps) {
    return (
        <div className="group rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 bg-[#162020] hover:shadow-[0_0_20px_rgba(13,242,242,0.1)] flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#162020] to-transparent opacity-60 z-10" />

                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 mb-2">
                        <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold uppercase px-2 py-1 rounded backdrop-blur-sm">{tag1}</span>
                        <span className="bg-black/40 text-white border border-white/10 text-[10px] font-bold uppercase px-2 py-1 rounded backdrop-blur-sm">{tag2}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 border-t border-slate-800 bg-[#162020] flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Price</span>
                    <span className="text-white font-bold text-lg">{price}</span>
                </div>

                <div className="flex gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Details</button>
                    <button className="px-4 py-2 bg-surface-metallic hover:bg-primary hover:text-background-dark text-white text-sm font-bold rounded border border-slate-600 hover:border-primary transition-all flex items-center gap-2">
                        Live Demo
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
