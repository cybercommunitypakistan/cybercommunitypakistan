"use client";

import React from "react";
import { LuCheck, LuUsers, LuBookOpen, LuCode, LuAward, LuRocket } from "react-icons/lu";

const benefits = [
    { icon: LuUsers, text: "Learn from professionals and industry experts" },
    { icon: LuUsers, text: "Meet researchers and security enthusiasts" },
    { icon: LuCode, text: "Collaborate on open-source projects" },
    { icon: LuAward, text: "Participate in CTF competitions" },
    { icon: LuBookOpen, text: "Attend exclusive workshops and trainings" },
    { icon: LuBookOpen, text: "Publish research and get recognition" },
    { icon: LuRocket, text: "Build your network and grow your career" },
];

export default function WhyJoinSection() {
    return (
        <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/5 blur-[120px]"></div>
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

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Why <span className="text-white/70">Join?</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
                    <p className="text-white/40 text-sm md:text-base font-light max-w-2xl mx-auto">
                        Become part of Pakistan&apos;s leading cybersecurity community and unlock
                        opportunities that accelerate your growth and impact.
                    </p>
                </div>

                {/* Benefits grid - 2 columns on md+, single on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-start gap-3 group p-3 rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                        <LuCheck className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                                <span className="text-white/70 group-hover:text-white text-sm md:text-base font-light leading-relaxed transition-colors duration-300">
                                    {benefit.text}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* CTA at bottom */}
                <div className="text-center mt-10">
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