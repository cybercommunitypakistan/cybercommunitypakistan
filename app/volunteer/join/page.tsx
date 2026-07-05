import { prisma } from "@/lib/prisma";
import VolunteerForm from "@/components/pages/Volunteer/VolunteerForm";
import { PublicFormField } from "@/types/form";

export default async function VolunteerJoinPage() {
  const fields = await prisma.formField.findMany({
    where: { formType: "volunteer", isActive: true },
    orderBy: { order: "asc" },
    select: {
      id: true,
      name: true,
      label: true,
      type: true,
      required: true,
      placeholder: true,
      helpText: true,
      options: true,
    },
  });

  const typedFields = fields as unknown as PublicFormField[];

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-foreground-main)]">
      <section className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        <span className="animate-fade-in-up inline-flex items-center text-code-sm font-mono text-[var(--color-accent-muted)] border border-[var(--color-card-stroke)] rounded-full px-3 py-1 mb-8">
          VOLUNTEER APPLICATION
          <span className="cursor-blink h-3" />
        </span>

        <h1 className="text-hero-title mb-4 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
          Join as a Volunteer
        </h1>
        <p
          className="text-[var(--color-accent-muted)] mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "160ms" }}
        >
          Tell us a bit about yourself. Fields marked with{" "}
          <span className="text-[var(--color-terminal-amber)]">*</span> are
          required. We&rsquo;ll review your application and get back to you
          within a week.
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: "240ms" }}>
          <VolunteerForm fields={typedFields} />
        </div>
      </section>
    </main>
  );
}