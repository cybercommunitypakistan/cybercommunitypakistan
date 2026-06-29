"use client";

import React from "react";
import { LuShield, LuUsers, LuRocket, LuBookOpen } from "react-icons/lu";

const values = [
    {
        icon: LuShield,
        title: "Security First",
        description: "We prioritize ethical practices and responsible disclosure to protect Pakistan's digital infrastructure.",
    },
    {
        icon: LuUsers,
        title: "Community Driven",
        description: "Built by cybersecurity enthusiasts, for everyone. We believe in open collaboration and shared growth.",
    },
    {
        icon: LuRocket,
        title: "Innovation & Excellence",
        description: "We push the boundaries of security research and develop cutting-edge tools for the community.",
    },
    {
        icon: LuBookOpen,
        title: "Knowledge Sharing",
        description: "We foster learning through workshops, whitepapers, and mentorship to upskill the next generation.",
    },
];

export default function MissionSection() {
    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px]"></div>
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
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Our <span className="text-white/70">Mission</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
                    <p className="text-white/40 text-sm md:text-base font-light leading-relaxed">
                        We are on a mission to create a safer, more resilient digital Pakistan.
                        Through open collaboration and cutting-edge research, we empower defenders
                        and inspire the next generation of cybersecurity leaders.
                    </p>
                </div>

                {/* Values grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-base tracking-tight mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Optional call-to-action */}
                <div className="text-center mt-12">
                    <p className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase">
                        Join the movement — become a defender
                    </p>
                </div>
            </div>
        </section>
    );
}