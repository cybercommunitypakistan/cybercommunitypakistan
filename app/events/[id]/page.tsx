"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    LuCalendar,
    LuClock,
    LuMapPin,
    LuUser,
    LuMail,
    LuPhone,
    LuFileText,
    LuArrowLeft,
    // LuCheckCircle,
    // LuXCircle,
} from "react-icons/lu";

// --- Event Data (would eventually come from CMS or API) ---
const eventsData = [
    {
        id: 1,
        title: "Introduction to Cybersecurity & Roadmap",
        date: "July 11, 2026",
        time: "10:00 AM - 12:00 PM PKT",
        location: "Online (Zoom)",
        category: "Workshop",
        spots: 50,
        description: `
            This session is designed for absolute beginners and enthusiasts looking to understand the fundamentals of cybersecurity.
            We will cover what cybersecurity is, why it's important, the different domains within the field, and provide a step-by-step
            roadmap to start a successful career in cybersecurity.
        `,
        agenda: [
            "What is Cybersecurity? (The Basics)",
            "The Cyber Threat Landscape (Real-world examples)",
            "Domains in Cybersecurity (Network, App, Cloud, GRC)",
            "Certifications and Learning Paths",
            "Interactive Q&A Session",
        ],
        speaker: "Cyber Community Pakistan Team",
    },
];

// --- Background Effects Component (reused from main hero) ---
function BackgroundEffects() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-white/5 blur-[80px]"></div>
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
                <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
                <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                <div className="absolute top-2/4 left-0 w-full h-px bg-white"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
            </div>
            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[150px] animate-[float_8s_ease-in-out_infinite_alternate]"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px] animate-[float_10s_ease-in-out_infinite_alternate_reverse]"></div>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-40px, 30px) scale(1.1); }
                }
            `}</style>
        </div>
    );
}

export default function EventDetailPage() {
    const params = useParams();
    const eventId = parseInt(params.id as string);
    const event = eventsData.find((e) => e.id === eventId);

    // --- Web3Forms Integration State ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // --- Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key ---
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

        const payload = {
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            event: event?.title || "Event Registration",
            redirect: window.location.href,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection.");
        }
    };

    // --- If event not found ---
    if (!event) {
        return (
            <section className="relative min-h-screen bg-black flex items-center justify-center px-4">
                <BackgroundEffects />
                <div className="relative z-10 text-center">
                    <h2 className="text-white text-2xl font-bold">Event not found</h2>
                    <Link href="/events" className="text-white/60 hover:text-white mt-4 inline-block">
                        ← Back to Events
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
            <BackgroundEffects />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Back Navigation */}
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white font-mono text-sm transition-colors duration-300 mb-8"
                >
                    <LuArrowLeft className="w-4 h-4" />
                    Back to Events
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Event Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero Card */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase border border-white/10 rounded-full px-2.5 py-0.5">
                                    {event.category}
                                </span>
                                <span className="text-white/20 text-[10px] font-mono">
                                    {event.spots} spots left
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                                {event.title}
                            </h1>
                            <div className="space-y-2 text-white/40 text-sm font-mono">
                                <div className="flex items-center gap-2">
                                    <LuCalendar className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuClock className="w-4 h-4" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuMapPin className="w-4 h-4" />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h2 className="text-white text-xl font-bold tracking-tight">About This Event</h2>
                            <p className="text-white/60 leading-relaxed font-light" style={{ fontFamily: "'Georgia', serif" }}>
                                {event.description}
                            </p>
                        </div>

                        {/* Agenda */}
                        <div className="space-y-4">
                            <h2 className="text-white text-xl font-bold tracking-tight">Agenda</h2>
                            <ul className="space-y-2">
                                {event.agenda.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-white/60 text-sm font-light">
                                        <span className="text-white/20 font-mono text-xs mt-0.5">0{index + 1}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Speaker */}
                        <div className="space-y-2">
                            <h2 className="text-white text-xl font-bold tracking-tight">Speaker</h2>
                            <p className="text-white/60 text-sm font-light">{event.speaker}</p>
                        </div>
                    </div>

                    {/* Right Column: Registration Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 sticky top-24">
                            <h3 className="text-white font-bold text-xl tracking-tight mb-2">Register Now</h3>
                            <p className="text-white/40 text-sm font-light mb-6">
                                Secure your spot for this event.
                            </p>

                            {status === "success" ? (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                                    {/* <LuCheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" /> */}
                                    <h4 className="text-white font-bold">Registration Successful!</h4>
                                    <p className="text-white/40 text-sm mt-1">
                                        We&apos;ve sent a confirmation to your email.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-4 text-white/60 hover:text-white font-mono text-xs transition-colors"
                                    >
                                        Register another person
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white/60 text-xs font-mono tracking-widest mb-1.5">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="e.g. Ahmad Raza"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-white/60 text-xs font-mono tracking-widest mb-1.5">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="e.g. ahmad@example.com"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-white/60 text-xs font-mono tracking-widest mb-1.5">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <LuPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="e.g. 03XX-XXXXXXX"
                                                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-white/60 text-xs font-mono tracking-widest mb-1.5">
                                            Message / Questions
                                        </label>
                                        <div className="relative">
                                            <LuFileText className="absolute left-3 top-3 text-white/30 w-4 h-4" />
                                            <textarea
                                                id="message"
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Any specific questions about the event?"
                                                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300 text-sm resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {status === "error" && (
                                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-2">
                                            {/* <LuXCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" /> */}
                                            <p className="text-red-400 text-sm">{errorMessage}</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full bg-white text-black font-mono text-sm font-semibold tracking-wider px-4 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                                    >
                                        {status === "loading" ? "Submitting..." : "Register Now"}
                                    </button>

                                    <p className="text-white/20 text-[10px] text-center font-mono">
                                        Powered by Web3Forms • Secure &amp; Free
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}