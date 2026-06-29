"use client";

import React from "react";
import Link from "next/link";
import { LuFileText, LuBell, LuDatabase } from "react-icons/lu";

export default function ResearchSection() {
    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/5 blur-[120px]"></div>
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                        <LuDatabase className="w-10 h-10 text-white/40" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Research
                </h2>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>

                {/* Main Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mt-6 hover:border-white/20 transition-all duration-500">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3 text-white/30">
                            <LuFileText className="w-6 h-6" />
                            <span className="text-xs font-mono tracking-[0.2em] uppercase">Repository</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white/70">
                            Coming <span className="text-white">Soon</span>
                        </h3>

                        <p className="text-white/40 max-w-md text-sm md:text-base leading-relaxed font-light">
                            We are building an open repository of cybersecurity research
                            focused on Pakistan and the wider community.
                        </p>

                        <div className="h-[1px] w-16 bg-white/10 my-2"></div>

                        {/* Placeholder for future papers - subtle */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mt-2">
                            <div className="bg-white/5 border border-white/5 rounded-lg p-3 text-left">
                                <div className="h-2 w-3/4 bg-white/10 rounded animate-pulse"></div>
                                <div className="h-1.5 w-1/2 bg-white/5 rounded mt-2"></div>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-lg p-3 text-left">
                                <div className="h-2 w-2/3 bg-white/10 rounded animate-pulse"></div>
                                <div className="h-1.5 w-1/3 bg-white/5 rounded mt-2"></div>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href="#notify"
                            className="group inline-flex items-center gap-2 mt-4 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300 border border-white/10 hover:border-white/30 rounded-full px-6 py-3"
                        >
                            <LuBell className="w-4 h-4" />
                            Get Notified
                            <span className="text-white/20 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                    </div>
                </div>

                {/* Small note */}
                <p className="text-white/20 text-xs font-mono mt-6 tracking-wider">
                    Research papers, whitepapers, and threat intelligence reports
                </p>
            </div>
        </section>
    );
}