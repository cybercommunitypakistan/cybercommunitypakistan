"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
    {
        title: "Open Collaboration",
        description: "Transparent, inclusive, community-driven development. Everyone has a voice and can contribute.",
    },
    {
        title: "Responsible Security",
        description: "Ethical disclosure, data protection, and secure-by-default principles.",
    },
    {
        title: "Continuous Learning",
        description: "A growth mindset through workshops, mentorship, and shared knowledge.",
    },
    {
        title: "Ethical Research",
        description: "Guided by integrity and transparency, in service of the wider security ecosystem.",
    },
];

export default function CommunityValuesSection() {
    return (
        <section className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="mb-14 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Community Values
                    </h2>
                    <p
                        className="text-white/40 text-base md:text-lg font-light leading-relaxed mt-4 max-w-2xl"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        The principles that guide how we build, research, and work together.
                    </p>
                </div>

                {/* Spec-sheet grid — hairline borders only, no fills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/10">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="border-b border-r border-white/10 p-6 md:p-10"
                        >
                            <h3 className="text-white font-bold text-lg tracking-tight mb-3">
                                {value.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}