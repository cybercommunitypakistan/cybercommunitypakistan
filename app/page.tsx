import HeroSection from "@/components/pages/Home/hero";
import EventsSection from "@/components/pages/Home/events";
import MissionSection from "@/components/pages/Home/mission";
import WhatWeDoSection from "@/components/pages/Home/whatwedo";
import ResearchSection from "@/components/pages/Home/research";
import CommunityValuesSection from "@/components/pages/Home/communityvalues";
import WhyJoinSection from "@/components/pages/Home/whyjoin";
import FAQSection from "@/components/pages/Home/faq";
import FinalCTASection from "@/components/pages/Home/cta";

export const metadata = {
    title: "Cyber Community Pakistan | Cybersecurity Research, CTFs & Ethical Hacking",
    description:
        "Cyber Community Pakistan is an open cybersecurity community focused on ethical hacking, research, CTF competitions, workshops, and collaboration across Pakistan.",
    keywords: [
        "Cybersecurity Pakistan",
        "Ethical Hacking Pakistan",
        "CTF Pakistan",
        "Cyber Community",
        "Security Research Pakistan",
        "Penetration Testing Pakistan",
        "Open Source Security",
    ],
    metadataBase: new URL("https://ccp.spurvancelabs.com"),

    openGraph: {
        title: "Cyber Community Pakistan",
        description:
            "Join Pakistan’s leading open cybersecurity community focused on research, learning, and collaboration.",
        url: "https://ccp.spurvancelabs.com",
        siteName: "Cyber Community Pakistan",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Cyber Community Pakistan",
        description:
            "Open cybersecurity community for researchers, students & ethical hackers.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <main className="bg-black text-white overflow-hidden">

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Cyber Community Pakistan",
                        url: "https://ccp.spurvancelabs.com",
                        description:
                            "Open cybersecurity community focused on research, education, and ethical hacking.",
                        sameAs: [
                            "https://github.com/cybercommunitypakistan",
                            "https://linkedin.com/showcase/cybercommunitypakistan",
                        ],
                    }),
                }}
            />

            {/* HERO */}
            <section id="hero" aria-label="Hero Section">
                <HeroSection />
            </section>

            {/* MISSION */}
            <section id="mission" aria-label="Mission Section">
                <MissionSection />
            </section>

            {/* WHAT WE DO */}
            <section id="what-we-do" aria-label="Services Section">
                <WhatWeDoSection />
            </section>

            {/* EVENTS */}
            <section id="events" aria-label="Events Section">
                <EventsSection />
            </section>

            {/* RESEARCH */}
            <section id="research" aria-label="Research Section">
                <ResearchSection />
            </section>

            {/* VALUES */}
            <section id="values" aria-label="Community Values Section">
                <CommunityValuesSection />
            </section>

            {/* WHY JOIN */}
            <section id="why-join" aria-label="Why Join Section">
                <WhyJoinSection />
            </section>

            {/* FAQ */}
            <section id="faq" aria-label="FAQ Section">
                <FAQSection />
            </section>

            {/* CTA */}
            <section id="cta" aria-label="Call To Action">
                <FinalCTASection />
            </section>

        </main>
    );
}