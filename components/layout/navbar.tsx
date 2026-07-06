"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
    { id: "01", name: "Home", href: "/" },
    { id: "02", name: "Events", href: "/events" },
    { id: "03", name: "Research", href: "/research-papers" },
    { id: "04", name: "Volunteer", href: "/volunteer" },
    { id: "05", name: "Partnership", href: "/partnership" },
    { id: "06", name: "Internship", href: "/internship" },
    { id: "07", name: "Community", href: "/community" },
    { id: "08", name: "About", href: "/about" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef(null);

    // Close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Glass effect on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll + Escape closes, while menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const onKey = (e:any) => e.key === "Escape" && setIsOpen(false);
            window.addEventListener("keydown", onKey);
            return () => {
                document.body.style.overflow = "unset";
                window.removeEventListener("keydown", onKey);
            };
        }
        document.body.style.overflow = "unset";
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] w-full transition-colors duration-300 ${
                    scrolled || isOpen
                        ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
                        : "bg-black/40 backdrop-blur-sm border-b border-white/5"
                }`}
            >
                <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] max-w-7xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                            <div className="absolute inset-0 border border-white/15 rounded-full group-hover:border-white/40 transition-all duration-300" />
                            <img
                                src="/logo.png"
                                alt="Cyber Community Pakistan"
                                className="invert"
                                width={32}
                                height={32}
                                
                                style={{ width: 32, height: 32 }}
                            />
                        </div>
                        <span className="font-mono font-bold text-white text-[13px] md:text-sm tracking-tight hidden sm:block">
                            CYBER COMMUNITY <span className="text-white/45">PAKISTAN</span>
                        </span>
                    </Link>

                    {/* Menu trigger */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-expanded={isOpen}
                        aria-controls="ccp-menu-overlay"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="group relative z-[110] flex items-center gap-3 rounded-full border border-white/15 hover:border-white/40 pl-4 pr-2 py-2 transition-colors duration-300 cursor-pointer"
                    >
                        <span className="hidden sm:block font-mono text-[11px] tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                            {isOpen ? "CLOSE" : "MENU"}
                        </span>
                        <span className="relative flex flex-col justify-center items-center gap-[5px] w-6 h-6">
                            <span
                                className={`h-[1.5px] w-5 bg-white transition-all duration-300 ease-in-out ${
                                    isOpen ? "rotate-45 translate-y-[6.5px]" : ""
                                }`}
                            />
                            <span
                                className={`h-[1.5px] w-5 bg-white transition-all duration-300 ease-in-out ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`h-[1.5px] w-5 bg-white transition-all duration-300 ease-in-out ${
                                    isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </header>

            {/* Overlay menu — locked to the viewport (hero), no page-scroll behind it */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="ccp-menu-overlay"
                        ref={menuRef}
                        role="dialog"
                        aria-modal="true"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="ccp-scroll fixed inset-0 z-[90] h-[100dvh] bg-black overflow-y-auto motion-reduce:transition-none"
                    >
                        <div className="relative min-h-[100dvh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-10 flex flex-col">
                            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 flex-1 items-center">
                                {/* Index */}
                                <nav aria-label="Main">
                                    <p className="font-mono text-[11px] tracking-[0.25em] text-white/35 mb-6 md:mb-8">
                                        INDEX / 0{NAV_LINKS.length}
                                    </p>
                                    <ul className="flex flex-col">
                                        {NAV_LINKS.map((link, idx) => {
                                            const active = pathname === link.href;
                                            return (
                                                <motion.li
                                                    key={link.id}
                                                    initial={{ opacity: 0, y: 12 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        delay: 0.12 + idx * 0.06,
                                                        duration: 0.4,
                                                        ease: "easeOut",
                                                    }}
                                                    className="border-b border-white/[0.08] last:border-none"
                                                >
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="group flex items-baseline gap-4 sm:gap-6 py-3.5 sm:py-4"
                                                    >
                                                        <span
                                                            className={`font-mono text-xs sm:text-sm tabular-nums ${
                                                                active ? "text-white" : "text-white/30"
                                                            }`}
                                                        >
                                                            {link.id}
                                                        </span>
                                                        <span
                                                            className={`font-mono text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-300 ${
                                                                active
                                                                    ? "text-white"
                                                                    : "text-white/50 group-hover:text-white"
                                                            }`}
                                                        >
                                                            {link.name}
                                                        </span>
                                                    </Link>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                        className="mt-8 md:mt-10"
                                    >
                                        <Link
                                            href="#join"
                                            onClick={() => setIsOpen(false)}
                                            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-mono text-xs font-semibold tracking-[0.15em] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-shadow duration-300"
                                        >
                                            JOIN THE COMMUNITY →
                                        </Link>
                                    </motion.div>
                                </nav>

                                {/* Right column — real content, not decoration */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="hidden lg:flex flex-col justify-between h-full border-l border-white/[0.08] pl-10 py-2"
                                >
                                    <p className="font-mono text-sm leading-relaxed text-white/50 max-w-xs">
                                        A community of security researchers, engineers, and students
                                        across Pakistan — building skills, sharing research, and
                                        defending what matters.
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-2">
                                                CONTACT
                                            </p>
                                            <a
                                                href="mailto:ccp@spurvancelabs.com"
                                                className="font-mono text-sm text-white/70 hover:text-white transition-colors"
                                            >
                                                ccp@spurvancelabs.com
                                            </a>
                                        </div>
                                        <div>
                                            <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-2">
                                                ELSEWHERE
                                            </p>
                                            <div className="flex gap-5 font-mono text-xs text-white/60">
                                                <a href="https://instagram.com/cybercommunitypakistan" className="hover:text-white transition-colors">
                                                    Instagram
                                                </a>
                                                <a href="https://discord.gg/cybercommunitypakistan" className="hover:text-white transition-colors">
                                                    Discord
                                                </a>
                                                <a href="https://github.com/cybercommunitypakistan" className="hover:text-white transition-colors">
                                                    GitHub
                                                </a>
                                                <a href="https://www.linkedin.com/showcase/cybercommunitypakistan" className="hover:text-white transition-colors">
                                                    LinkedIn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45, duration: 0.4 }}
                                className="mt-10 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
                            >
                                <p className="font-mono text-[10px] tracking-[0.15em] text-white/30">
                                    Site Under Development
                                </p>
                                <p className="font-mono text-[10px] tracking-[0.15em] text-white/30">
                                    © {new Date().getFullYear()} CYBER COMMUNITY PAKISTAN
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styled scrollbar — only kicks in as a fallback on very short viewports */}
            <style jsx global>{`
                .ccp-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
                }
                .ccp-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .ccp-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .ccp-scroll::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.25);
                    border-radius: 999px;
                }
                .ccp-scroll::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </>
    );
};

export default Navbar;