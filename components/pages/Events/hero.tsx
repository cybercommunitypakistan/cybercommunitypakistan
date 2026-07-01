"use client";

import Link from "next/link";
import { LuClock, LuMapPin } from "react-icons/lu";

const nextEvent = {
    id: 1,
    title: "Introduction to Cybersecurity & Roadmap",
    dateLabel: "Jul",
    dateDay: "11",
    time: "10:00 AM PKT",
    location: "Online (Zoom)",
    category: "Workshop",
    spots: 50,
};

export default function EventsHero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen w-full bg-black flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="relative max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left — statement */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="font-mono text-xs tracking-[0.25em] text-white/35 uppercase">
                            Events
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                            Our Next Event
                        </h1>

                        <p
                            className="text-white/50 text-base sm:text-lg max-w-xl font-light leading-relaxed"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            We&apos;re starting with a focused introduction for anyone curious
                            about cybersecurity — no prior experience required. More sessions
                            will follow as the community grows.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href="#event"
                                className="bg-white text-black px-8 py-4 rounded-full font-mono text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105"
                            >
                                View Details
                            </Link>
                            {/* <Link
                                href="#calendar"
                                className="border border-white/25 text-white px-8 py-4 rounded-full font-mono text-sm font-medium tracking-wider transition-all duration-300 hover:border-white hover:bg-white/5"
                            >
                                Add to Calendar
                            </Link> */}
                        </div>
                    </div>

                    {/* Right — spotlight card */}
                    <div className="lg:col-span-5 hidden lg:flex justify-center">
                        <div className="relative w-full max-w-[360px] border border-white/12 rounded-2xl p-6">
                            <div className="flex items-center gap-2 text-white/40 text-xs font-mono tracking-widest mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                                <span>NEXT EVENT</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 border border-white/10 rounded-lg p-3 text-center min-w-[60px]">
                                    <span className="block text-white/40 text-[10px] font-mono uppercase">
                                        {nextEvent.dateLabel}
                                    </span>
                                    <span className="block text-white font-bold text-2xl">
                                        {nextEvent.dateDay}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase border border-white/10 rounded-full px-2 py-0.5">
                                        {nextEvent.category}
                                    </span>
                                    <h3 className="text-white font-bold text-lg tracking-tight mt-2">
                                        {nextEvent.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-2 text-white/40 text-xs">
                                        <span className="flex items-center gap-1">
                                            <LuClock className="w-3 h-3" /> {nextEvent.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <LuMapPin className="w-3 h-3" /> {nextEvent.location}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/events/${nextEvent.id}`}
                                        className="inline-block mt-3 text-white/60 hover:text-white text-xs font-mono tracking-wider transition-colors duration-300"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-white/30 text-[10px] font-mono">
                                <span>{nextEvent.spots} spots left</span>
                                <span>free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}