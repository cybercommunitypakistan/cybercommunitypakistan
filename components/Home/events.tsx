"use client";

import Link from "next/link";
import { LuCalendar, LuArrowRight } from "react-icons/lu";

const events = [
    {
        id: 1,
        date: "July 15, 2026",
        title: "Cyber Threat Intelligence Workshop",
        description: "Learn how to collect, analyze, and act on threat intelligence to protect your organization.",
    },
    {
        id: 2,
        date: "July 28, 2026",
        title: "Ethical Hacking Live Demo",
        description: "Watch live penetration testing on a sandbox environment and discover real-world vulnerabilities.",
    },
    {
        id: 3,
        date: "August 5, 2026",
        title: "Open Source Security Tools Hackathon",
        description: "Collaborate to build and improve open-source security tools for the community.",
    },
];

export default function EventsSection() {
    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px]"></div>
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

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Upcoming <span className="text-white/70">Events</span>
                        </h2>
                        <p className="text-white/40 mt-2 text-sm md:text-base font-light max-w-2xl">
                            Join us in our mission to secure Pakistan&apos;s digital future.
                            Participate in workshops, hackathons, and live demos.
                        </p>
                    </div>
                    <Link
                        href="/events"
                        className="group inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300"
                    >
                        View All Events
                        <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Events grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        >
                            <div className="flex items-center gap-3 text-white/30 text-xs font-mono mb-4">
                                <LuCalendar className="w-4 h-4" />
                                <span>{event.date}</span>
                            </div>
                            <h3 className="text-white font-bold text-lg tracking-tight mb-2">
                                {event.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">
                                {event.description}
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <Link
                                    href={`/events/${event.id}`}
                                    className="text-white/30 hover:text-white text-xs font-mono tracking-wider transition-colors duration-300 inline-flex items-center gap-1"
                                >
                                    Learn More
                                    <LuArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}