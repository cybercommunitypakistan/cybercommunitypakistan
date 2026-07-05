"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--foreground-main)]">
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-wider border border-[var(--card-stroke)] rounded-full px-4 py-1.5 text-[var(--terminal-blue)]">
            <span className="w-2 h-2 rounded-full bg-[var(--terminal-blue)] animate-pulse" />
            internship_program
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Intern with Cyber Community Pakistan
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 text-[var(--accent-muted)] max-w-2xl mx-auto leading-relaxed">
            Students and early-career security enthusiasts can join our
            internship program to work on real community initiatives, learn
            from practitioners, and build hands-on experience in cybersecurity.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10">
            <Link
              href="/internship/apply"
              className="inline-block bg-[var(--color-accent-main)] text-black font-mono text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(0,255,102,0.25)]"
            >
              Apply for Internship
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Hands-On Projects",
            desc: "Contribute to real community tools, research, and security initiatives.",
          },
          {
            title: "Mentorship",
            desc: "Learn directly from experienced practitioners in the community.",
          },
          {
            title: "CTF & Events",
            desc: "Help run workshops and CTFs while building your own skills.",
          },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="terminal-card rounded-xl p-6 transition-all duration-300 hover:border-[var(--color-terminal-blue)]/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,210,255,0.08)]">
              <h3 className="font-mono text-sm uppercase tracking-wide text-[var(--terminal-green)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--accent-muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}