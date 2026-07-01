"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    LuCode,
    LuUsers,
    LuAward,
    LuBookOpen,
    LuShield,
    LuWrench,
    LuArrowRight,
} from "react-icons/lu";

const activities = [
    {
        id: "01",
        icon: LuCode,
        title: "Open Source Development",
        description: "We build and maintain security tools, frameworks, and libraries for the community.",
    },
    {
        id: "02",
        icon: LuUsers,
        title: "Workshops & Trainings",
        description: "Hands-on sessions on penetration testing, threat hunting, and secure coding.",
    },
    {
        id: "03",
        icon: LuAward,
        title: "CTF Competitions",
        description: "Capture The Flag events to sharpen skills and discover new talent.",
    },
    {
        id: "04",
        icon: LuBookOpen,
        title: "Research & Whitepapers",
        description: "In-depth research on emerging threats and defensive strategies.",
    },
    {
        id: "05",
        icon: LuShield,
        title: "Security Advisory",
        description: "Guidance for organizations to strengthen posture and respond to incidents.",
    },
    {
        id: "06",
        icon: LuWrench,
        title: "Tooling & Automation",
        description: "Automation scripts, SIEM integrations, and monitoring solutions.",
    },
];

export default function WhatWeDoSection() {
    return (
        <section className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-end justify-between mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        What We Do
                    </h2>
                    <span className="hidden sm:block font-mono text-xs tracking-[0.2em] text-white/30">
                        0{activities.length} AREAS
                    </span>
                </div>

                <div className="border-t border-white/10">
                    {activities.map((activity, i) => {
                        const Icon = activity.icon;
                        return (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group grid grid-cols-[auto_auto_1fr] sm:grid-cols-[3rem_2.5rem_1fr_1.6fr] items-center gap-x-4 sm:gap-x-8 py-5 md:py-6 border-b border-white/10"
                            >
                                <span className="font-mono text-xs text-white/25 tabular-nums">
                                    {activity.id}
                                </span>
                                <Icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">
                                    {activity.title}
                                </h3>
                                <p className="hidden sm:block text-white/40 text-sm leading-relaxed font-light col-span-full sm:col-auto">
                                    {activity.description}
                                </p>
                                <p className="sm:hidden text-white/40 text-sm leading-relaxed font-light col-span-3 pl-16 -mt-1">
                                    {activity.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-10">
                    <Link
                        href="/community"
                        className="group inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300"
                    >
                        Explore All Activities
                        <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}