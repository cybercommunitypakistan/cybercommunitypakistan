"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Research", href: "/research-papers" },
        { name: "Community", href: "/community" },
        { name: "About", href: "/about" },
    ];

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Detect scroll for glass effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-black/40 backdrop-blur-sm border-b border-white/5"
            }`}
        >
            <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 max-w-7xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                        <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white/30 transition-all duration-300"></div>
                        <Image
                            src="/logo.png"
                            alt="Cyber Community Pakistan"
                            className="invert drop-shadow-lg"
                            width={36}
                            height={36}
                            priority
                            style={{ width: 36, height: 36 }}
                        />
                    </div>
                    <span className="font-mono font-bold text-white text-sm md:text-base tracking-tight hidden sm:block">
                        Cyber Community <span className="text-white/50">Pakistan</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-mono text-xs font-medium tracking-[0.15em] transition-all duration-300 relative group ${
                                pathname === link.href
                                    ? "text-white"
                                    : "text-white/40 hover:text-white/80"
                            }`}
                        >
                            {link.name}
                            <span
                                className={`absolute -bottom-1 left-0 right-0 h-[1px] bg-white transition-all duration-300 ${
                                    pathname === link.href
                                        ? "w-full opacity-100"
                                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                }`}
                            ></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="#join"
                        className="group relative overflow-hidden bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105"
                    >
                        <span className="relative z-10">Join Us</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-50 flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`h-[1.5px] w-6 bg-white transition-all duration-300 ease-in-out ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`h-[1.5px] w-6 bg-white transition-all duration-300 ease-in-out ${
                            isOpen ? "opacity-0 scale-0" : ""
                        }`}
                    />
                    <span
                        className={`h-[1.5px] w-6 bg-white transition-all duration-300 ease-in-out ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-8 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`font-mono text-2xl font-light tracking-widest transition-all duration-300 ${
                                pathname === link.href
                                    ? "text-white"
                                    : "text-white/40 hover:text-white/80"
                            }`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-8 border-t border-white/10 w-full max-w-xs flex justify-center">
                        <Link
                            href="#join"
                            onClick={() => setIsOpen(false)}
                            className="bg-white text-black px-8 py-3 rounded-full font-mono text-sm font-semibold tracking-wider hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300"
                        >
                            Join Community
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;