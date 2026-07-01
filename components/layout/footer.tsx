"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import {
    SiGithub,
    // SiLinkedin,
    SiInstagram,
    SiWhatsapp,
    SiThreads,
    SiDiscord,
    SiYoutube,
} from "react-icons/si";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/cybercommunitypakistan", icon: SiGithub },
    // { name: "LinkedIn", href: "https://linkedin.com/showcase/cybercommunitypakistan", icon: SiLinkedin },
    { name: "Discord", href: "https://discord.gg/cybercommunitypakistan", icon: SiDiscord },
    { name: "Instagram", href: "https://instagram.com/cybercommunitypakistan", icon: SiInstagram },
    { name: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBOsFL96H4LmUFRHz3b", icon: SiWhatsapp },
    { name: "Threads", href: "https://threads.com/cybercommunitypakistan", icon: SiThreads },
    { name: "YouTube", href: "https://youtube.com/cybercommunitypakistan", icon: SiYoutube },
];

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

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-8 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 md:pb-16">
                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="relative flex items-center justify-center w-9 h-9">
                                <div className="absolute inset-0 border border-white/15 rounded-full group-hover:border-white/40 transition-all duration-300" />
                                <Image
                                    src="/logo.png"
                                    alt="Cyber Community Pakistan"
                                    className="invert"
                                    width={28}
                                    height={28}
                                    style={{ width: 28, height: 28 }}
                                />
                            </div>
                            <span className="font-mono font-bold text-white text-sm tracking-tight">
                                CYBER COMMUNITY <span className="text-white/45">PAKISTAN</span>
                            </span>
                        </Link>

                        <p
                            className="text-white/40 text-sm leading-relaxed max-w-sm font-light mt-5"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            An open cybersecurity community dedicated to research, education,
                            and ethical hacking across Pakistan.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-7">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        title={social.name}
                                        className="text-white/35 hover:text-white transition-colors duration-300"
                                    >
                                        <Icon className="w-[18px] h-[18px]" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {/* <div>
                            <h4 className="font-mono text-white/35 text-[10px] uppercase tracking-[0.2em] mb-4">
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                {resourceLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-white text-sm transition-colors duration-300 block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <div>
                            <h4 className="font-mono text-white/35 text-[10px] uppercase tracking-[0.2em] mb-4">
                                Community
                            </h4>
                            <ul className="space-y-3">
                                {communityLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-white text-sm transition-colors duration-300 block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="lg:col-span-3">
                        <h4 className="font-mono text-white/35 text-[10px] uppercase tracking-[0.2em] mb-4">
                            Connect
                        </h4>
                        <a
                            href="mailto:ccp@spurvancelabs.com"
                            className="text-white/50 hover:text-white text-sm transition-colors duration-300 block mb-5"
                        >
                            ccp@spurvancelabs.com
                        </a>

                        <a
                            href="https://spurvancelabs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border-t border-white/10 pt-4"
                        >
                            <span>
                                <span className="block text-white/60 text-sm group-hover:text-white transition-colors duration-300">
                                    Spurvance Labs
                                </span>
                                <span className="block text-white/25 text-xs font-light mt-0.5">
                                    Open source IT company
                                </span>
                            </span>
                            <LuArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-6 border-t border-white/10">
                    <p className="font-mono text-[10px] tracking-[0.15em] text-white/25">
                        © {new Date().getFullYear()} CYBER COMMUNITY PAKISTAN. ALL RIGHTS RESERVED.
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-white/25">
                        This Website is currently in beta. Please report any issues to{" "}
                        <a
                            href="mailto:info@spurvancelabs.com"
                            className="text-white/50 hover:text-white transition-colors duration-300"
                        >
                            info@spurvancelabs.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}