import { ChevronDown } from "lucide-react";

export default function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
            <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors group"
                onClick={onToggle}
                data-testid={`button-faq-${q.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
            >
                <span className="text-sm font-semibold text-gray-900 pr-4 group-hover:text-teal-600 transition-colors">{q}</span>
                <span className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                </span>
            </button>
            <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-4">
                        <div className="h-px bg-gray-100 mb-4" />
                        <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
