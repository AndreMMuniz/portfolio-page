import Image from "next/image";

interface PluginCardProps {
    version: string;
    icon?: string;
    imageSrc?: string;
    title: string;
    description: string;
    tags: string[];
}

export default function PluginCard({ version, icon, imageSrc, title, description, tags }: PluginCardProps) {
    return (
        <div className="metallic-card p-6 rounded-lg relative group overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 p-4">
                <span className="bg-[#1b2727] border border-slate-700 text-xs text-slate-300 px-2 py-1 rounded">{version}</span>
            </div>

            <div className="w-12 h-12 rounded bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-4 border border-slate-600 shadow-inner relative overflow-hidden">
                {imageSrc ? (
                    <Image src={imageSrc} alt={`${title} icon`} fill className="object-cover" />
                ) : (
                    <span className="material-symbols-outlined text-white text-2xl">{icon || 'extension'}</span>
                )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-slate-400 mb-6 min-h-[40px] flex-grow">{description}</p>

            <div className="flex items-center justify-between border-t border-slate-700/50 pt-4 mt-auto">
                <div className="flex gap-2 flex-wrap">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="text-primary hover:text-white text-sm font-bold flex items-center gap-1 transition-colors flex-shrink-0 ml-2">
                    Marketplace
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </button>
            </div>
        </div>
    );
}
