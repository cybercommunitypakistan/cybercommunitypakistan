"use client";

import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const faqs = [
    {
        question: "Who can join Cyber Community Pakistan?",
        answer: "Anyone with an interest in cybersecurity — from absolute beginners to seasoned professionals. We welcome students, researchers, developers, ethical hackers, and security enthusiasts from all backgrounds who want to learn, share, and grow together."
    },
    {
        question: "Is membership free?",
        answer: "Yes! Membership is completely free. We believe in open access to knowledge and community. There are no hidden fees or premium tiers — everyone gets full access to events, resources, and collaborations."
    },
    {
        question: "Do I need prior experience to join?",
        answer: "Not at all! We have resources and mentors for every level. Whether you're just starting your cybersecurity journey or have years of experience, you'll find value in our community. Our workshops and events are designed to accommodate all skill levels."
    },
    {
        question: "Can students join?",
        answer: "Absolutely! Students are one of our largest and most active groups. We provide mentorship, internship opportunities, research guidance, and a platform to showcase your skills. Many of our members started as students and have grown into industry professionals."
    },
    {
        question: "Can I contribute research?",
        answer: "Yes! We actively encourage research contributions. You can collaborate on ongoing projects, submit whitepapers, present at our events, or co-author papers with senior researchers. Our goal is to build an open research ecosystem for Pakistan."
    },
    {
        question: "How do events work?",
        answer: "Events are announced on our website and social channels. They include workshops, CTFs, hackathons, guest speaker sessions, and meetups. Most events are free and open to all members. You can register through our events page and participate either online or in-person."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQ Schema for SEO
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
                            Frequently Asked <span className="text-white/70">Questions</span>
                        </h2>
                        <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
                        <p className="text-white/40 text-sm md:text-base font-light">
                            Everything you need to know about joining and participating in our community.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`border rounded-xl transition-all duration-300 ${
                                        isOpen
                                            ? "border-white/20 bg-white/10"
                                            : "border-white/10 bg-white/5 hover:border-white/15 hover:bg-white/10"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left cursor-pointer"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-white font-medium text-sm md:text-base tracking-tight">
                                            {faq.question}
                                        </span>
                                        <LuChevronDown
                                            className={`flex-shrink-0 w-5 h-5 text-white/40 transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="px-4 md:px-5 pb-5 pt-1">
                                            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-10">
                        <p className="text-white/30 text-sm font-light mb-4">
                            Still have questions? Reach out to us anytime.
                        </p>
                        <a
                            href="mailto:hello@cybercommunity.pk"
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