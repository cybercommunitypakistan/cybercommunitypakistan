import { prisma } from "@/lib/prisma";
import DynamicForm from "@/components/DynamicForm";
import type { PublicFormField } from "@/types/form";
import { submitInternshipForm } from "@/actions/form";

const Page = async () => {
  const fields = await prisma.formField.findMany({
    where: { formType: "internship", isActive: true },
    orderBy: { order: "asc" },
  });

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--foreground-main)] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--terminal-blue)]">
          &gt; internship/apply
          <span className="animate-pulse">_</span>
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Internship Application
        </h1>
        <p className="mt-2 text-sm text-[var(--accent-muted)]">
          Tell us about yourself and why you&apos;d like to intern with us.
        </p>

        <div className="mt-10">
          <DynamicForm
            fields={fields as unknown as PublicFormField[]}
            onSubmit={submitInternshipForm}
            submitLabel="Submit Application"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;