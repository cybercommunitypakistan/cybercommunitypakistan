"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuCalendar, LuClock, LuMapPin, LuSearch, LuFilter } from "react-icons/lu";

// Extended event data
const allEvents = [
    {
        id: 1,
        title: "Cyber Threat Intelligence Workshop",
        description: "Learn how to collect, analyze, and act on threat intelligence to protect your organization.",
        date: "July 15, 2026",
        time: "10:00 AM - 2:00 PM",
        location: "Online",
        category: "Workshop",
        spots: 12,
    },
    {
        id: 2,
        title: "Ethical Hacking Live Demo",
        description: "Watch live penetration testing on a sandbox environment and discover real-world vulnerabilities.",
        date: "July 28, 2026",
        time: "3:00 PM - 6:00 PM",
        location: "Lahore, Pakistan",
        category: "Demo",
        spots: 25,
    },
    {
        id: 3,
        title: "Open Source Security Tools Hackathon",
        description: "Collaborate to build and improve open-source security tools for the community.",
        date: "August 5, 2026",
        time: "9:00 AM - 5:00 PM",
        location: "Islamabad, Pakistan",
        category: "Hackathon",
        spots: 8,
    },
    {
        id: 4,
        title: "Incident Response Roundtable",
        description: "Share experiences and best practices for handling security incidents in enterprise environments.",
        date: "August 12, 2026",
        time: "2:00 PM - 4:00 PM",
        location: "Online",
        category: "Roundtable",
        spots: 30,
    },
    {
        id: 5,
        title: "Secure Coding Bootcamp",
        description: "Intensive hands-on training on writing secure code and preventing common vulnerabilities.",
        date: "August 19, 2026",
        time: "9:00 AM - 6:00 PM",
        location: "Karachi, Pakistan",
        category: "Workshop",
        spots: 15,
    },
    {
        id: 6,
        title: "CTF Night: Red vs Blue",
        description: "Team up for a competitive capture-the-flag challenge with both offensive and defensive scenarios.",
        date: "August 26, 2026",
        time: "7:00 PM - 11:00 PM",
        location: "Online",
        category: "CTF",
        spots: 20,
    },
];

export default function EventsListSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");

    const categories = ["All", ...new Set(allEvents.map((e) => e.category))];

    const filteredEvents = allEvents.filter((event) => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "All" || event.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px]"></div>
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

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        All <span className="text-white/70">Events</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
                    <p className="text-white/40 text-sm md:text-base font-light max-w-2xl mx-auto">
                        Discover all upcoming workshops, CTFs, hackathons, and talks. Filter by category to find what interests you.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                    <div className="relative flex-1">
                        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300 text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        <LuFilter className="text-white/30 w-4 h-4 flex-shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoryFilter(cat)}
                                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 whitespace-nowrap ${
                                    categoryFilter === cat
                                        ? "bg-white text-black"
                                        : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Grid */}
                {filteredEvents.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-white/40 text-lg">No events match your criteria.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setCategoryFilter("All"); }}
                            className="mt-4 text-white/60 hover:text-white font-mono text-sm transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] flex flex-col"
                            >
                                {/* Category badge */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase border border-white/10 rounded-full px-2.5 py-0.5">
                                        {event.category}
                                    </span>
                                    <span className="text-white/20 text-[10px] font-mono">
                                        {event.spots} spots left
                                    </span>
                                </div>

                                <h3 className="text-white font-bold text-lg tracking-tight mb-2 line-clamp-2">
                                    {event.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light mb-4 flex-1 line-clamp-3">
                                    {event.description}
                                </p>

                                {/* Event details */}
                                <div className="space-y-1.5 text-white/40 text-xs font-mono mb-4">
                                    <div className="flex items-center gap-2">
                                        <LuCalendar className="w-3.5 h-3.5" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuClock className="w-3.5 h-3.5" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuMapPin className="w-3.5 h-3.5" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={`/events/${event.id}`}
                                    className="inline-flex items-center justify-center w-full bg-white/10 hover:bg-white text-black font-mono text-xs font-semibold tracking-wider px-4 py-2 rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black"
                                >
                                    Register Now
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* Load more (placeholder) */}
                {filteredEvents.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="text-white/40 hover:text-white font-mono text-sm transition-colors duration-300 border border-white/10 hover:border-white/30 rounded-full px-6 py-2">
                            Load More Events
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}