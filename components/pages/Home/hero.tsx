"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Background Effects */}
            <BackgroundEffects />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-7 xl:col-span-7 space-y-5 md:space-y-6">
                        {/* Main Heading with Typewriter - strictly 2 lines */}
                        <div className="space-y-1">
                            {/* Line 1: "We Are" */}
                            <h1 className="sr-only">
                                Cyber Community Pakistan - Cybersecurity Research and Ethical Hacking Community - A project of Spurvance Labs
                            </h1>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-white">
                                We Are
                            </h1>
                            {/* Line 2: Typewriter - now forced to stay on one line */}
                            <div className="overflow-visible py-2">
                                <div className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.1] tracking-tight">
                                    <div className="inline-flex min-w-[22ch] justify-start">
                                        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent whitespace-nowrap">
                                            <Typewriter
                                                words={[
                                                    "Securing Pakistan",
                                                    "Uniting Defenders",
                                                    "Building Resilience",
                                                    "Open Security",
                                                ]}
                                                loop={0}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={80}
                                                deleteSpeed={50}
                                                delaySpeed={1500}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description with different font */}
                        <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed tracking-wide"
                            style={{ fontFamily: "'Georgia', serif" }}>
                            A community-driven initiative uniting cybersecurity professionals,
                            enthusiasts, and defenders across Pakistan. We collaborate openly,
                            share knowledge, and build tools to protect our digital ecosystem.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href="#join"
                                className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-mono text-sm sm:text-base font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105"
                            >
                                <span className="relative z-10">Join Community</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-white to-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>

                            <Link
                                href="#about"
                                className="group relative overflow-hidden border border-white/30 text-white px-8 py-4 rounded-full font-mono text-sm sm:text-base font-medium tracking-wider transition-all duration-300 hover:border-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                            >
                                <span className="relative z-10">Learn More</span>
                                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Engaging Terminal */}
                    <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex items-center justify-center">
                        <Terminal />
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono">
                    Scroll
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]"></div>
            </div>

            <style jsx>{`
                @keyframes scrollPulse {
                    0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
                    50% { opacity: 1; transform: scaleY(1); }
                }
            `}</style>
        </section>
    );
}

// ─── Terminal Component ──────────────────────────────────────────────
function Terminal() {
    const [lines, setLines] = useState<string[]>([
        "> whoami",
        "Cyber Community Pakistan",
        "> status",
        "● active | v3.0",
        "> open_source",
        "✓ collaboration enabled",
    ]);

    return (
        <div className="relative w-full max-w-[360px] bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-[0_0_60px_rgba(255,255,255,0.05)] hover:shadow-[0_0_80px_rgba(255,255,255,0.08)] transition-all duration-500">
            {/* Terminal header */}
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-white/30 text-xs font-mono ml-2">cyber-pak@terminal:~</span>
            </div>

            {/* Terminal body with animated typing */}
            <div className="mt-3 space-y-1 font-mono text-sm">
                {lines.map((line, idx) => {
                    if (line.startsWith(">")) {
                        return (
                            <div key={idx} className="text-white/70 flex items-center">
                                <span className="text-green-400/70 mr-2">$</span>
                                <span>{line.slice(2)}</span>
                            </div>
                        );
                    } else if (line.startsWith("●")) {
                        return (
                            <div key={idx} className="text-white/40 text-xs flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse"></span>
                                <span>{line.slice(2)}</span>
                            </div>
                        );
                    } else {
                        return (
                            <div key={idx} className="text-white/80 font-medium tracking-wide">
                                {line}
                            </div>
                        );
                    }
                })}
                {/* Blinking cursor at the end */}
                <div className="flex items-center text-white/60 mt-1">
                    <span className="text-green-400/70 mr-2">$</span>
                    <span className="animate-[blink_1s_step-end_infinite]">▌</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    );
}

// ─── Background Effects ──────────────────────────────────────────────
function BackgroundEffects() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Base dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            ></div>

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-white/5 blur-[80px]"></div>

            {/* Diagonal lines */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
                <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
                <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                <div className="absolute top-2/4 left-0 w-full h-px bg-white"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
            </div>

            {/* Animated gradient orb */}
            <div
                className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[150px] animate-[float_8s_ease-in-out_infinite_alternate]"
            ></div>
            <div
                className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px] animate-[float_10s_ease-in-out_infinite_alternate_reverse]"
            ></div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-40px, 30px) scale(1.1); }
                }
            `}</style>
        </div>
    );
}