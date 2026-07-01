"use client";

import React from "react";
import Link from "next/link";
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
        icon: LuCode,
        title: "Open Source Development",
        description: "We build and maintain security tools, frameworks, and libraries for the community. Contribute code and make an impact.",
    },
    {
        icon: LuUsers,
        title: "Workshops & Trainings",
        description: "Hands-on sessions on penetration testing, threat hunting, incident response, and secure coding practices.",
    },
    {
        icon: LuAward,
        title: "CTF Competitions",
        description: "Capture The Flag events to sharpen skills, encourage teamwork, and discover new talent in cybersecurity.",
    },
    {
        icon: LuBookOpen,
        title: "Research & Whitepapers",
        description: "We publish in-depth research on emerging threats, vulnerabilities, and defensive strategies to advance the field.",
    },
    {
        icon: LuShield,
        title: "Security Advisory",
        description: "Guidance and best practices for organizations to strengthen their security posture and respond to incidents.",
    },
    {
        icon: LuWrench,
        title: "Tooling & Automation",
        description: "We develop automation scripts, SIEM integrations, and monitoring solutions to streamline security operations.",
    },
];

export default function WhatWeDoSection() {
    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/5 blur-[150px]"></div>
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
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        What <span className="text-white/70">We Do</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
                    <p className="text-white/40 text-sm md:text-base font-light leading-relaxed">
                        From building open-source tools to training the next generation of security experts,
                        our activities are designed to strengthen Pakistan&apos;s cybersecurity ecosystem.
                    </p>
                </div>

                {/* Activities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                                        <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-white font-bold text-base tracking-tight">
                                        {activity.title}
                                    </h3>
                                </div>
                                <p className="text-white/40 text-sm leading-relaxed font-light pl-1">
                                    {activity.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/community"
                        className="group inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300 border border-white/10 hover:border-white/30 rounded-full px-6 py-3"
                    >
                        Explore All Activities
                        <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}