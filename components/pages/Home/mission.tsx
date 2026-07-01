"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
    {
        id: "01",
        title: "Security First",
        description: "Ethical practices and responsible disclosure to protect Pakistan's digital infrastructure.",
    },
    {
        id: "02",
        title: "Community Driven",
        description: "Built by cybersecurity enthusiasts, for everyone — open collaboration, shared growth.",
    },
    {
        id: "03",
        title: "Innovation",
        description: "Security research and tooling that pushes the field forward, not just keeps up with it.",
    },
    {
        id: "04",
        title: "Knowledge Sharing",
        description: "Workshops, whitepapers, and mentorship to upskill the next generation of defenders.",
    },
];

export default function MissionSection() {
    return (
        <section className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Header — asymmetric, not centered */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16 mb-16 md:mb-20">
                    <p className="font-mono text-xs tracking-[0.25em] text-white/35 uppercase pt-2">
                        Our Mission
                    </p>
                    <p
                        className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light leading-relaxed max-w-3xl"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        We are building a safer, more resilient digital Pakistan — through open
                        collaboration and research that empowers defenders and inspires the next
                        generation of cybersecurity leaders.
                    </p>
                </div>

                {/* Indexed strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`py-8 pr-6 border-b border-white/10 ${
                                i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""
                            }`}
                        >
                            <span className="font-mono text-xs text-white/30 tabular-nums">
                                {pillar.id}
                            </span>
                            <h3 className="text-white font-bold text-base tracking-tight mt-3 mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}