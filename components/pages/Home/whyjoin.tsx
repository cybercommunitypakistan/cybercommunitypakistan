"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
    "Learn from professionals and industry experts",
    "Meet researchers and security enthusiasts",
    "Collaborate on open-source projects",
    "Participate in CTF competitions",
    "Attend exclusive workshops and trainings",
    "Publish research and get recognition",
    "Build your network and grow your career",
];

export default function WhyJoinSection() {
    return (
        <section className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Why Join?
                    </h2>
                    <p
                        className="text-white/40 text-base md:text-lg font-light leading-relaxed mt-4 max-w-xl"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        Become part of Pakistan&apos;s leading cybersecurity community and unlock
                        opportunities that accelerate your growth and impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 border-t border-white/10">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                            className="flex items-baseline gap-4 py-4 border-b border-white/10"
                        >
                            <span className="font-mono text-xs text-white/30 tabular-nums shrink-0">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                                {benefit}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="#join"
                        className="inline-block bg-white text-black px-8 py-3 rounded-full font-mono text-sm font-semibold tracking-wider hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105"
                    >
                        Join Us Today
                    </a>
                </div>
            </div>
        </section>
    );
}