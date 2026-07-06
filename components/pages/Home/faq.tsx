"use client";

import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";

const faqs = [
    {
        question: "Who can join Cyber Community Pakistan?",
        answer: "Anyone with an interest in cybersecurity — from absolute beginners to seasoned professionals. We welcome students, researchers, developers, ethical hackers, and security enthusiasts from all backgrounds who want to learn, share, and grow together."
    },
    {
        question: "Is membership free?",
        answer: "Yes. Membership is completely free. We believe in open access to knowledge and community — no hidden fees or premium tiers. Everyone gets full access to events, resources, and collaborations."
    },
    {
        question: "Do I need prior experience to join?",
        answer: "Not at all. We have resources and mentors for every level, whether you're just starting your cybersecurity journey or have years of experience. Our workshops and events are designed to accommodate all skill levels."
    },
    {
        question: "Can students join?",
        answer: "Absolutely — students are one of our largest and most active groups. We provide mentorship, internship opportunities, research guidance, and a platform to showcase your skills."
    },
    {
        question: "Can I contribute research?",
        answer: "Yes. You can collaborate on ongoing projects, submit whitepapers, present at our events, or co-author papers with senior researchers. Our goal is an open research ecosystem for Pakistan."
    },
    {
        question: "How do events work?",
        answer: "Events are announced on our website and social channels — workshops, CTFs, hackathons, guest speaker sessions, and meetups. Most are free and open to all members, online or in-person."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-white/40 text-sm md:text-base font-light mt-4">
                            Everything you need to know about joining and participating in our community.
                        </p>
                    </div>

                    <div className="border-t border-white/10">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={faq.question} className="border-b border-white/10">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer group"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="flex items-baseline gap-4">
                                            <span className="font-mono text-xs text-white/25 tabular-nums">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-white font-medium text-sm md:text-base tracking-tight group-hover:text-white/80 transition-colors">
                                                {faq.question}
                                            </span>
                                        </span>
                                        <LuPlus
                                            className={`flex-shrink-0 w-4 h-4 text-white/40 transition-transform duration-300 ${
                                                isOpen ? "rotate-45" : ""
                                            }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <p className="text-white/40 text-sm md:text-base leading-relaxed font-light pl-9 pb-6 max-w-2xl">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10">
                        <p className="text-white/30 text-sm font-light mb-4">
                            Still have questions? Reach out to us anytime.
                        </p>
                        <a
                            href="mailto:ccp@spurvancelabs.com"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300 border border-white/10 hover:border-white/30 rounded-full px-6 py-3"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}