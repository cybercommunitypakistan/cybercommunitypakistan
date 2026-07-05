"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma/client";
import { buildDynamicSchema } from "@/lib/dynamicValidation";
import type { FormField } from "@/types/form";

export type SubmitResult =
  | { success: true; id: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

interface SubmitFormData {
  formType: string;
  [key: string]: any;
}

export async function submitForm(
  formData: SubmitFormData,
): Promise<SubmitResult> {
  const fields = (await prisma.formField.findMany({
    where: { formType: formData.formType, isActive: true },
  })) as FormField[];

  if (fields.length === 0) {
    return {
      success: false,
      error: "This form is not currently accepting submissions.",
    };
  }

  const schema = buildDynamicSchema(fields);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const submission = await prisma.formSubmission.create({
    data: {
      formType: formData.formType,
      data: parsed.data as Prisma.InputJsonValue,
    },
  });

  return { success: true, id: submission.id };
}

export async function submitVolunteerForm(
  formData: Record<string, any>,
): Promise<SubmitResult> {
  return submitForm({ ...formData, formType: "volunteer" });
}

export async function submitPartnershipForm(
  formData: Record<string, any>,
): Promise<SubmitResult> {
  return submitForm({ ...formData, formType: "partnership" });
}

export async function submitInternshipForm(
  formData: Record<string, any>,
): Promise<SubmitResult> {
  return submitForm({ ...formData, formType: "internship" });
}