import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TEAL } from "@/lib/constants";

export function KidroveLogo() {
    return (
        <a href="https://kidrove.com">
            <img src="/logo.jpeg" alt="Kidrove Logo" className="h-7 md:h-10 w-auto" />
        </a>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <KidroveLogo />
                    <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
                        <a href="https://kidrove.com/search" className="hover:text-teal-500 transition-colors">Find Activities</a>
                        <a href="https://kidrove.com/blog" className="hover:text-teal-500 transition-colors">Blog</a>
                        <a href="https://kidrove.com/about" className="hover:text-teal-500 transition-colors">About</a>
                        <a href="https://kidrove.com/faq" className="hover:text-teal-500 transition-colors">FAQ</a>
                        <a href="https://kidrove.com/contact" className="hover:text-teal-500 transition-colors">Get In Touch</a>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <a href="https://kidrove.com/search" className="text-gray-500 hover:text-teal-500 transition-colors p-2">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
                        </a>
                        <a
                            href="https://kidrove.com/login"
                            data-testid="button-login"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-sm"
                            style={{ backgroundColor: TEAL }}
                        >
                            Login
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 -mr-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        data-testid="button-mobile-menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden pb-4 pt-2 border-t border-gray-100 flex flex-col gap-3 text-sm font-medium text-gray-700">
                        <a href="https://kidrove.com/search" className="hover:text-teal-500 py-1">Find Activities</a>
                        <a href="https://kidrove.com/blog" className="hover:text-teal-500 py-1">Blog</a>
                        <a href="https://kidrove.com/about" className="hover:text-teal-500 py-1">About</a>
                        <a href="https://kidrove.com/faq" className="hover:text-teal-500 py-1">FAQ</a>
                        <a href="https://kidrove.com/contact" className="hover:text-teal-500 py-1">Get In Touch</a>
                        <a href="https://kidrove.com/login" className="self-start flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: TEAL }}>
                            Login
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
