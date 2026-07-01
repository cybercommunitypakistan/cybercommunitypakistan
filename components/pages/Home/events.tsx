"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const events = [
    {
        id: 1,
        date: "July 11",
        year: "2026",
        title: "Introduction to Cybersecurity & Roadmap",
        description: "Learn how to collect, analyze, and act on threat intelligence to protect your organization.",
    },
];

export default function EventsSection() {
    return (
        <section className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Upcoming Events
                    </h2>
                    <Link
                        href="/events"
                        className="group inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300"
                    >
                        View All Events
                        <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Timeline */}
                <div className="relative pl-8 sm:pl-10">
                    <div className="absolute top-2 bottom-2 left-[5px] sm:left-[7px] w-px bg-white/15" />
                    {events.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative pb-12 last:pb-0"
                        >
                            <span className="absolute -left-8 sm:-left-10 top-1.5 w-[11px] h-[11px] rounded-full bg-black border border-white/40" />
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                                <span className="font-mono text-xs tracking-[0.15em] text-white/40 uppercase">
                                    {event.date} &middot; {event.year}
                                </span>
                            </div>
                            <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-2">
                                {event.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light max-w-xl mb-3">
                                {event.description}
                            </p>
                            <Link
                                href={`/events/${event.id}`}
                                className="text-white/40 hover:text-white text-xs font-mono tracking-wider transition-colors duration-300 inline-flex items-center gap-1"
                            >
                                Learn More
                                <LuArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}