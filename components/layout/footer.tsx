"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLock, LuTerminal, LuArrowUpRight } from "react-icons/lu";

export default function Footer() {
    const resourceLinks = [
        { name: "GitHub Repos", href: "/repos" },
        { name: "Whitepapers", href: "/whitepapers" },
        { name: "Incident Reports", href: "/incident-report" },
    ];

    const communityLinks = [
        { name: "Events", href: "/events" },
        { name: "Community", href: "/community" },
        { name: "About", href: "/about" },
    ];

    return (
        <footer className="bg-black border-t border-white/5 px-6 py-12 md:py-16 w-full font-mono">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative flex items-center justify-center w-10 h-10">
                                <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white/30 transition-all duration-300"></div>
                                <Image
                                    src="/logo.png"
                                    alt="Cyber Community Pakistan"
                                    className="invert drop-shadow-lg"
                                    width={32}
                                    height={32}
                                    priority
                                    style={{ width: 32, height: 32 }}
                                />
                            </div>
                            <span className="font-bold text-white text-sm tracking-tight">
                                Cyber Community <span className="text-white/40">Pakistan</span>
                            </span>
                        </Link>

                        <p className="text-white/40 text-xs leading-relaxed max-w-xs font-light">
                            Pakistan&apos;s premier cybersecurity community dedicated to fostering
                            innovation, security awareness, and technical expertise across the
                            digital landscape.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/30 hover:text-white transition-colors duration-300"
                            >
                                <LuGithub className="w-4 h-4" />
                            </a>
                            <a
                                href="#secure"
                                className="text-white/30 hover:text-white transition-colors duration-300"
                            >
                                <LuLock className="w-4 h-4" />
                            </a>
                            <div className="flex items-center gap-0.5 text-white/30 hover:text-white transition-colors duration-300 cursor-pointer">
                                <LuTerminal className="w-4 h-4" />
                                <span className="text-[10px] font-bold">_</span>
                            </div>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/40 hover:text-white text-xs transition-colors duration-300 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div className="md:col-span-2 space-y-3">
                        <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Community
                        </h4>
                        <ul className="space-y-2">
                            {communityLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/40 hover:text-white text-xs transition-colors duration-300 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal Column */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Connect
                        </h4>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-white/30 text-[10px] tracking-wider">
                                    Spurvance Labs
                                </span>
                                <a
                                    href="https://spurvancelabs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-white transition-colors duration-300"
                                >
                                    <LuArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                            <p className="text-white/20 text-[9px] mt-1 tracking-wider">
                                Open source IT company
                            </p>
                        </div>

                        <div className="text-white/20 text-[10px] leading-relaxed space-y-0.5 pt-2 border-t border-white/5">
                            <p>© 2026 Cyber Community Pakistan.</p>
                            <p>All rights reserved. Secure transmission active.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}