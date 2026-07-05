import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function VolunteerLandingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-foreground-main)]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <span
          className="animate-fade-in-up inline-flex items-center text-code-sm font-mono text-[var(--color-accent-muted)] border border-[var(--color-card-stroke)] rounded-full px-3 py-1 mb-8"
          style={{ animationDelay: "0ms" }}
        >
          JOIN THE MISSION
          <span className="cursor-blink h-3" />
        </span>

        <h1
          className="text-hero-title mb-6 animate-fade-in-up"
          style={{ animationDelay: "80ms" }}
        >
          Volunteer With Cyber Community Pakistan
        </h1>

        <p
          className="text-lg text-[var(--color-accent-muted)] leading-relaxed max-w-xl animate-fade-in-up"
          style={{ animationDelay: "160ms" }}
        >
          We&rsquo;re a community of defenders, researchers, and builders working to
          make Pakistan&rsquo;s digital infrastructure safer. Volunteers run our
          workshops, write our research, moderate our channels, and mentor the
          next generation of ethical hackers.
        </p>

        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
          <Link
            href="/volunteer/join"
            className="inline-block bg-[var(--color-accent-main)] text-black font-mono text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(0,255,102,0.25)]"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* What volunteering involves */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-[var(--color-card-stroke)] pt-12">
          <Reveal>
            <p className="text-code-sm font-mono text-[var(--color-accent-muted)] mb-4">
              WHAT TO EXPECT
            </p>
            <h2 className="text-section-title mb-8">
              A few hours a week, real impact.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Flexible commitment",
                body: "Most volunteers give 2–5 hours a week — remote, async-friendly, and built around your schedule.",
              },
              {
                title: "Pick your track",
                body: "Mentor, write, organize events, build tools, or run CTF challenges — you choose where you contribute.",
              },
              {
                title: "No gatekeeping",
                body: "Students and self-taught defenders are as welcome as working professionals. We care about intent and consistency.",
              },
              {
                title: "Quick review",
                body: "Applications are reviewed within a week. We'll reach out over email or WhatsApp once yours is reviewed.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="terminal-card rounded-xl p-6 transition-all duration-300 hover:border-[var(--color-terminal-blue)]/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,210,255,0.08)]">
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-[var(--color-accent-muted)]">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA repeat */}
      <Reveal>
        <section className="max-w-3xl mx-auto px-6 pb-32">
          <div className="border-t border-[var(--color-card-stroke)] pt-12 flex items-center justify-between flex-wrap gap-6">
            <p className="text-[var(--color-accent-muted)]">
              Ready to get involved? The form takes about 5 minutes.
            </p>
            <Link
              href="/volunteer/join"
              className="inline-block bg-[var(--color-accent-main)] text-black font-mono text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(0,255,102,0.25)] whitespace-nowrap"
            >
              Register Now
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}