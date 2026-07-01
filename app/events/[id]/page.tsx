// app/events/[id]/page.tsx
import EventDetailClient from './EventDetailClient';

// Move your hardcoded data here (or import from a shared location)
const eventsData = [
    {
        id: 1,
        title: "Introduction to Cybersecurity & Roadmap",
        date: "July 11, 2026",
        time: "10:00 AM - 12:00 PM PKT",
        location: "Online (Zoom)",
        category: "Workshop",
        spots: 50,
        description:
            "This session is designed for absolute beginners and enthusiasts looking to understand the fundamentals of cybersecurity. We will cover what cybersecurity is, why it's important, the different domains within the field, and provide a step-by-step roadmap to start a successful career in cybersecurity.",
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

// ✅ THIS is what fixes your build error!
export async function generateStaticParams() {
    return eventsData.map((event) => ({
        id: event.id.toString(),
    }));
}

// Server Component wrapper - passes the event data to the client component
export default function Page({ params }: { params: { id: string } }) {
    const eventId = parseInt(params.id);
    const event = eventsData.find((e) => e.id === eventId);
    return <EventDetailClient event={event} />;
}