"use server";

import { prisma } from "@/lib/prisma";
import { buildDynamicSchema } from "@/lib/dynamicValidation"

type SubmitResult =
  | { success: true; id: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitVolunteerForm(
  formData: Record<string, any>
): Promise<SubmitResult> {
  const fields = await prisma.formField.findMany({
    where: { formType: "volunteer", isActive: true },
  });

  if (fields.length === 0) {
    return { success: false, error: "This form is not currently accepting submissions." };
  }

  const schema = buildDynamicSchema(fields);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const submission = await prisma.formSubmission.create({
    data: {
      formType: "volunteer",
      data: parsed.data,
    },
  });

  return { success: true, id: submission.id };
}