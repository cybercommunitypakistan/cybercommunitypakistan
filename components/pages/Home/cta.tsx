"use client";

import React from "react";
import Link from "next/link";

export default function FinalCTASection() {
    return (
        <section className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/10 blur-[150px]"></div>
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Question */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                    Ready to strengthen Pakistan&apos;s
                    <br />
                    <span className="text-white/70">cybersecurity community?</span>
                </h2>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-white/20 mx-auto my-6"></div>

                {/* Bold Call to Action */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10">
                    <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Join the movement.
                    </span>
                </div>

                {/* Large Button */}
                <Link
                    href="#join"
                    className="group relative inline-block bg-white text-black px-10 py-4 md:px-14 md:py-5 rounded-full font-mono text-sm md:text-base font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10">Become a Member</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                </Link>

                {/* Trust / Security line */}
                <p className="text-white/20 text-xs font-mono tracking-widest mt-8">
                    🔒 Free. Open. Community-driven.
                </p>
            </div>
        </section>
    );
}