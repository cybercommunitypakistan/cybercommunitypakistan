import { z } from "zod";
import type { FormField } from "@/types/form";

export function buildDynamicSchema(fields: FormField[]) {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const field of fields) {
    let validator: z.ZodTypeAny;

    switch (field.type) {
      case "EMAIL":
        validator = z.string().email();
        break;

      case "NUMBER":
        validator = z.coerce.number();
        break;

      case "URL":
        validator = z.string().url();
        break;

      case "FILE":
        validator = z.string().url();
        break;

      case "DATE":
        validator = z.coerce.date();
        break;

      case "CHECKBOX":
        validator = z.boolean();
        break;

      case "MULTISELECT":
        validator = z.array(z.string());
        break;

      case "SELECT":
      case "RADIO":
        if (field.options && field.options.length > 0) {
          const values = field.options.map((opt) => opt.value) as [
            string,
            ...string[],
          ];
          validator = z.enum(values);
        } else {
          validator = z.string();
        }
        break;

      default:
        validator = z.string();
    }

    if (field.validation) {
      const v = field.validation;

      if (v.minLength !== undefined && validator instanceof z.ZodString) {
        validator = validator.min(v.minLength);
      }
      if (v.maxLength !== undefined && validator instanceof z.ZodString) {
        validator = validator.max(v.maxLength);
      }
      if (v.pattern && validator instanceof z.ZodString) {
        validator = validator.regex(new RegExp(v.pattern));
      }
      if (v.min !== undefined && validator instanceof z.ZodNumber) {
        validator = validator.min(v.min);
      }
      if (v.max !== undefined && validator instanceof z.ZodNumber) {
        validator = validator.max(v.max);
      }
    }

    shape[field.name] = field.required ? validator : validator.optional();
  }

  return z.object(shape);
}
