"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Slide Data ──────────────────────────────────────────────────────────
const slides = [
    {
        id: 0,
        title: "Securing Pakistan's Digital Future",
        subtitle: "Community Driven",
        description:
            "A community of cybersecurity professionals, enthusiasts, and defenders working together to build a safer digital ecosystem for Pakistan.",
        cta: "Join Us",
        ctaLink: "/join",
        image: "/images/hero/slide1.jpg",
        alt: "Cybersecurity community collaboration",
    },
    {
        id: 1,
        title: "Empowering Ethical Hackers",
        subtitle: "Skill Development",
        description:
            "Hands-on workshops, CTFs, and mentorship programs designed to sharpen your skills and advance your career in cybersecurity.",
        cta: "Explore Events",
        ctaLink: "/events",
        image: "/images/hero/slide2.jpg",
        alt: "Ethical hacking workshop",
    },
    {
        id: 2,
        title: "Building Cyber Resilience",
        subtitle: "Knowledge Sharing",
        description:
            "Open-source research, threat intelligence, and collaborative defense strategies to protect organizations and critical infrastructure.",
        cta: "Learn More",
        ctaLink: "/about",
        image: "/images/hero/slide3.jpg",
        alt: "Cyber resilience and defense",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        pauseAutoPlay();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        pauseAutoPlay();
    };

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        if (autoPlayTimeoutRef.current) {
            clearTimeout(autoPlayTimeoutRef.current);
        }
        autoPlayTimeoutRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 10000);
    };

    // Auto-advance slides
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 7000);

        return () => clearTimeout(timer);
    }, [currentSlide, isAutoPlaying, totalSlides]);

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (autoPlayTimeoutRef.current) {
                clearTimeout(autoPlayTimeoutRef.current);
            }
        };
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        pauseAutoPlay();
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextSlide();
            else if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const current = slides[currentSlide];

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >

            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center">
                {/* Content */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center relative z-10 py-12 lg:py-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: 0.2,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                transition: {
                                    duration: 0.6,
                                    ease: [0.7, 0, 0.84, 0],
                                },
                            }}
                            className="max-w-2xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0"
                        >
                            <motion.span
                                className="inline-block px-4 py-1 border border-white/20 text-white/60 rounded-full text-xs font-mono tracking-widest uppercase mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.4, duration: 0.6 },
                                }}
                            >
                                {current.subtitle}
                            </motion.span>
                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.5, duration: 0.8 },
                                }}
                            >
                                {current.title}
                            </motion.h1>
                            <motion.p
                                className="text-base sm:text-lg text-white/60 max-w-lg font-light leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.6, duration: 0.8 },
                                }}
                                style={{ fontFamily: "'Georgia', serif" }}
                            >
                                {current.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.7, duration: 0.8 },
                                }}
                            >
                                <Link
                                    href={current.ctaLink}
                                    className="inline-block bg-white text-black px-8 py-3 rounded-full font-mono text-sm font-semibold tracking-wider hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105"
                                >
                                    {current.cta}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots - centered */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-10">
                        {slides.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all ${
                                    currentSlide === index
                                        ? 'bg-white w-8'
                                        : 'bg-white/30 w-2 hover:bg-white/50'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Image on the right side (desktop) */}
                <div className="hidden lg:block w-1/2 h-full relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`image-${currentSlide}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                },
                            }}
                            exit={{
                                opacity: 0,
                                x: -100,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.7, 0, 0.84, 0],
                                },
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <img
                                src={current.image}
                                alt={current.alt}
                                width={635}
                                height={940}
                                className="object-contain object-right w-auto h-full"
                                // priority={currentSlide === 0}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Image (background) */}
                <div className="lg:hidden absolute inset-0 z-0 opacity-30">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`mobile-${currentSlide}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-full"
                        >
                            <img
                                src={current.image}
                                alt={current.alt}
                                // fill
                                className="object-cover"
                                // priority={currentSlide === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 lg:hidden">
                    <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono">
                        Scroll
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-scrollPulse"></div>
                </div>
            </div>

            {/* Single style block for all animations */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-40px, 30px) scale(1.1); }
                }
                @keyframes float-reverse {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(40px, -30px) scale(1.1); }
                }
                @keyframes scrollPulse {
                    0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
                    50% { opacity: 1; transform: scaleY(1); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite alternate;
                }
                .animate-float-reverse {
                    animation: float-reverse 10s ease-in-out infinite alternate;
                }
                .animate-scrollPulse {
                    animation: scrollPulse 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}