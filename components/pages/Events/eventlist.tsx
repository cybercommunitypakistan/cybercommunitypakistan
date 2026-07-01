"use client";

import Link from "next/link";
import { LuCalendar, LuClock, LuMapPin } from "react-icons/lu";

const event = {
    id: 1,
    title: "Introduction to Cybersecurity & Roadmap",
    description:
        "A session designed for absolute beginners and enthusiasts looking to understand the fundamentals of cybersecurity — what it is, why it matters, and how to start building a career in it.",
    date: "July 11, 2026",
    time: "10:00 AM – 12:00 PM PKT",
    location: "Online (Zoom)",
    category: "Workshop",
    spots: 50,
};

export default function EventsListSection() {
    return (
        <section id="event" className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 md:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Upcoming
                    </h2>
                    <p className="text-white/40 text-sm md:text-base font-light mt-3 max-w-xl">
                        We&apos;re running one event at a time as the community gets started.
                    </p>
                </div>

                {/* Event dossier */}
                <div className="border border-white/12 rounded-2xl p-6 sm:p-8 md:p-10">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase border border-white/10 rounded-full px-2.5 py-0.5">
                            {event.category}
                        </span>
                        <span className="text-white/30 text-[10px] font-mono">
                            {event.spots} spots left · free
                        </span>
                    </div>

                    <h3 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-4">
                        {event.title}
                    </h3>

                    <p
                        className="text-white/50 text-sm sm:text-base leading-relaxed font-light mb-6 max-w-2xl"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        {event.description}
                    </p>

                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/40 text-xs font-mono mb-8 pb-8 border-b border-white/10">
                        <span className="flex items-center gap-2">
                            <LuCalendar className="w-3.5 h-3.5" /> {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <LuClock className="w-3.5 h-3.5" /> {event.time}
                        </span>
                        <span className="flex items-center gap-2">
                            <LuMapPin className="w-3.5 h-3.5" /> {event.location}
                        </span>
                    </div>

                    <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center justify-center bg-white text-black font-mono text-sm font-semibold tracking-wider px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105"
                    >
                        Register Now
                    </Link>
                </div>

                <p className="text-white/30 text-sm font-light mt-8 text-center">
                    More events coming soon — follow our Discord or socials for announcements.
                </p>
            </div>
        </section>
    );
}