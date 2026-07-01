"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    LuCalendar,
    LuClock,
    LuMapPin,
    LuUser,
    LuMail,
    LuPhone,
    LuFileText,
    LuArrowLeft,
    LuTriangleAlert,
} from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_LINK = "https://chat.whatsapp.com/C5j42mXyy9A7quJK19XDo3";

// ✅ Receive the event as a prop instead of fetching it via useParams
export default function EventDetailClient({ event }: { event: any }) {
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

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "bbdd8fb6-2fd5-41d1-8fb7-111c33c76edd";

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
                headers: { "Content-Type": "application/json" },
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
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection.");
        }
    };

    // ✅ Fallback if event is not found (passed from parent)
    if (!event) {
        return (
            <section className="relative min-h-screen bg-black flex items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-white text-2xl font-bold">Event not found</h2>
                    <Link href="/events" className="text-white/60 hover:text-white mt-4 inline-block">
                        ← Back to Events
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="mt-16 max-w-7xl mx-auto">
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white font-mono text-sm transition-colors duration-300 mb-8"
                >
                    <LuArrowLeft className="w-4 h-4" />
                    Back to Events
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Event details */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="border border-white/12 rounded-2xl p-6 md:p-8">
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

                        <div className="space-y-4">
                            <h2 className="text-white text-xl font-bold tracking-tight">About This Event</h2>
                            <p
                                className="text-white/60 leading-relaxed font-light"
                                style={{ fontFamily: "'Georgia', serif" }}
                            >
                                {event.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-white text-xl font-bold tracking-tight">Agenda</h2>
                            <ul className="space-y-3">
                                {event.agenda.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3 text-white/60 text-sm font-light">
                                        <span className="text-white/30 font-mono text-xs mt-0.5 shrink-0">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-white text-xl font-bold tracking-tight">Speaker</h2>
                            <p className="text-white/60 text-sm font-light">{event.speaker}</p>
                        </div>
                    </div>

                    {/* Right: Registration form (unchanged) */}
                    <div className="lg:col-span-1">
                        <div className="border border-white/12 rounded-2xl p-6 md:p-8 sticky top-24">
                            {status === "success" ? (
                                <div className="text-center py-2">
                                    <h3 className="text-white font-bold text-xl tracking-tight mb-2">
                                        Thanks for registering
                                    </h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                                        We&apos;ve saved your details for this event. A confirmation
                                        has been sent to your email.
                                    </p>

                                    <div className="border-t border-white/10 pt-6">
                                        <p className="text-white/40 text-xs font-mono tracking-wider uppercase mb-3">
                                            Stay in the loop
                                        </p>
                                        <a
                                            href={WHATSAPP_LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full border border-white/20 hover:border-white/40 text-white font-mono text-sm font-medium tracking-wide px-4 py-3 rounded-full transition-all duration-300"
                                        >
                                            <SiWhatsapp className="w-4 h-4" />
                                            Join our WhatsApp Community
                                        </a>
                                        <p className="text-white/25 text-[11px] font-light mt-3">
                                            Our Discord is still under development — WhatsApp is the
                                            best place to get updates for now.
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-white/40 hover:text-white font-mono text-xs transition-colors"
                                    >
                                        Register another person
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-white font-bold text-xl tracking-tight mb-2">Register Now</h3>
                                    <p className="text-white/40 text-sm font-light mb-4">
                                        Secure your spot for this event.
                                    </p>

                                    <div className="flex gap-2.5 border border-white/15 rounded-lg p-3 mb-6">
                                        <LuTriangleAlert className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                                        <p className="text-white/50 text-xs leading-relaxed font-light">
                                            Registration is required to receive your certificate.
                                            Please fill in your details correctly — they{" "}
                                            <span className="text-white/80">cannot be changed</span>{" "}
                                            after submission.
                                        </p>
                                    </div>

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
                                            <div className="border border-white/20 rounded-lg p-3">
                                                <p className="text-white/70 text-sm">{errorMessage}</p>
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
                                            Supported By{" "}
                                            <a
                                                href="https://spurvancelabs.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/40 hover:text-white transition-colors duration-300"
                                            >
                                                Spurvance Labs
                                            </a>
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}