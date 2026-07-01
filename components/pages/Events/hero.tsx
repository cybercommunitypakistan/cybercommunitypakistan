"use client";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { LuCalendar, LuClock, LuMapPin } from "react-icons/lu";

export default function EventsHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Background Effects (same as main hero) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
                <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-white/5 blur-[80px]"></div>
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                    <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                    <div className="absolute top-2/4 left-0 w-full h-px bg-white"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
                </div>
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[150px] animate-[float_8s_ease-in-out_infinite_alternate]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px] animate-[float_10s_ease-in-out_infinite_alternate_reverse]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-7 xl:col-span-7 space-y-5 md:space-y-6">
                        <div className="space-y-1">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-white">
                                Explore Our
                            </h1>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-white/90">
                                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent whitespace-nowrap overflow-hidden inline-block max-w-full">
                                    <Typewriter
                                        words={[
                                            "Events",
                                            "Workshops",
                                            "CTFs",
                                            "Hackathons",
                                            "Talks",
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

                        <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed tracking-wide"
                           style={{ fontFamily: "'Georgia', serif" }}>
                            Discover a calendar of events designed to educate, challenge, and connect
                            Pakistan&apos;s cybersecurity community. From hands-on workshops to high-stakes CTFs,
                            there&apos;s something for everyone.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href="#events-list"
                                className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-mono text-sm sm:text-base font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105"
                            >
                                <span className="relative z-10">View All Events</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-white to-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>
                            <Link
                                href="#calendar"
                                className="group relative overflow-hidden border border-white/30 text-white px-8 py-4 rounded-full font-mono text-sm sm:text-base font-medium tracking-wider transition-all duration-300 hover:border-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                            >
                                <span className="relative z-10">Add to Calendar</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Next Event Card */}
                    <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-[340px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(255,255,255,0.03)] hover:shadow-[0_0_80px_rgba(255,255,255,0.06)] transition-all duration-500">
                            <div className="flex items-center gap-2 text-white/40 text-xs font-mono tracking-widest mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-400/60 animate-pulse"></span>
                                <span>NEXT EVENT</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-white/10 rounded-lg p-3 text-center min-w-[60px]">
                                    <span className="block text-white/40 text-[10px] font-mono uppercase">Jul</span>
                                    <span className="block text-white font-bold text-2xl">15</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg tracking-tight">Cyber Threat Intelligence Workshop</h3>
                                    <div className="flex items-center gap-3 mt-2 text-white/40 text-xs">
                                        <span className="flex items-center gap-1"><LuClock className="w-3 h-3" /> 10:00 AM</span>
                                        <span className="flex items-center gap-1"><LuMapPin className="w-3 h-3" /> Online</span>
                                    </div>
                                    <Link
                                        href="/events/1"
                                        className="inline-block mt-3 text-white/60 hover:text-white text-xs font-mono tracking-wider transition-colors duration-300"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-white/20 text-[10px] font-mono">
                                <span>● 12 spots left</span>
                                <span>free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
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
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-40px, 30px) scale(1.1); }
                }
            `}</style>
        </section>
    );
}