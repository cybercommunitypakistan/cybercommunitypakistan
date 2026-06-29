"use client";

import React from "react";
import { LuUsers, LuShield, LuBookOpen, LuMicroscope } from "react-icons/lu";

const values = [
    {
        icon: LuUsers,
        title: "Open Collaboration",
        description: "We believe in transparent, inclusive, and community-driven development. Everyone has a voice and can contribute.",
    },
    {
        icon: LuShield,
        title: "Responsible Security",
        description: "We practice ethical disclosure, prioritize data protection, and advocate for secure-by-default principles.",
    },
    {
        icon: LuBookOpen,
        title: "Continuous Learning",
        description: "We foster a growth mindset through workshops, mentorship, and sharing of knowledge to stay ahead of threats.",
    },
    {
        icon: LuMicroscope,
        title: "Ethical Research",
        description: "Our research is guided by integrity, transparency, and a commitment to improving the security ecosystem.",
    },
];

export default function CommunityValuesSection() {
    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-white/5 blur-[130px]"></div>
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
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Community <span className="text-white/70">Values</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
                    <p className="text-white/40 text-sm md:text-base font-light leading-relaxed">
                        The foundation of everything we do — guiding our actions, decisions,
                        and collaborations as we work together to secure Pakistan&apos;s digital future.
                    </p>
                </div>

                {/* Values Grid - 4 pillars in 2x2 on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg tracking-tight mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Optional decorative footer */}
                <div className="text-center mt-12">
                    <p className="text-white/20 text-xs font-mono tracking-[0.2em] uppercase">
                        Strengthening Pakistan through security
                    </p>
                </div>
            </div>
        </section>
    );
}