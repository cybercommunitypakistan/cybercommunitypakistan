"use client";

import React from "react";
import Link from "next/link";

export default function FinalCTASection() {
    return (
        <section className="relative bg-black py-24 md:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                    Join the movement.
                </h2>

                <p
                    className="text-white/40 text-base md:text-lg font-light leading-relaxed mt-6 max-w-xl mx-auto"
                    style={{ fontFamily: "'Georgia', serif" }}
                >
                    Ready to strengthen Pakistan&apos;s cybersecurity community? It starts with
                    one step.
                </p>

                <div className="mt-12">
                    <Link
                        href="/join"
                        className="group relative inline-block bg-white text-black px-10 py-4 md:px-14 md:py-5 rounded-full font-mono text-sm md:text-base font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95"
                    >
                        Become a Member
                    </Link>
                </div>

                <p className="text-white/25 text-xs font-mono tracking-[0.2em] uppercase mt-10">
                    Free &middot; Open &middot; Community-driven
                </p>
            </div>
        </section>
    );
}