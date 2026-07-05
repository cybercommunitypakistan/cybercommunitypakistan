"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { PublicFormField } from "@/types/form";
import { uploadFile } from "@/lib/uploadFile";
import type { SubmitResult } from "@/actions/form";

interface DynamicFormProps {
  fields: PublicFormField[];
  onSubmit: (data: Record<string, any>) => Promise<SubmitResult>;
  submitLabel?: string;
}

type FieldValidation = {
  allowedTypes?: string[];
  maxSizeMB?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  min?: number;
  max?: number;
};

function getValidation(field: PublicFormField): FieldValidation | undefined {
  return (field as PublicFormField & { validation?: FieldValidation }).validation;
}

function validateField(field: PublicFormField, value: any): string | null {
  const validation = getValidation(field);
  const isEmpty =
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0);

  if (field.required && isEmpty) {
    return "This field is required";
  }

  if (isEmpty) return null;

  if (typeof value === "string") {
    if (field.type === "EMAIL" || /email/i.test(field.name)) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(value)) return "Enter a valid email address";
    }

    if (validation?.minLength && value.length < validation.minLength) {
      return `Must be at least ${validation.minLength} characters`;
    }
    if (validation?.maxLength && value.length > validation.maxLength) {
      return `Must be at most ${validation.maxLength} characters`;
    }
    if (validation?.pattern) {
      try {
        const re = new RegExp(validation.pattern);
        if (!re.test(value)) {
          return validation.patternMessage ?? "Invalid format";
        }
      } catch {
      }
    }
  }

  if (typeof value === "number") {
    if (validation?.min !== undefined && value < validation.min) {
      return `Must be at least ${validation.min}`;
    }
    if (validation?.max !== undefined && value > validation.max) {
      return `Must be at most ${validation.max}`;
    }
  }

  if (field.type === "FILE" && value instanceof File) {
    if (validation?.allowedTypes && validation.allowedTypes.length > 0) {
      const matches = validation.allowedTypes.some((t) => {
        if (t.startsWith(".")) return value.name.toLowerCase().endsWith(t.toLowerCase());
        if (t.endsWith("/*")) return value.type.startsWith(t.replace("/*", ""));
        return value.type === t;
      });
      if (!matches) return "File type not allowed";
    }
    if (validation?.maxSizeMB && value.size > validation.maxSizeMB * 1024 * 1024) {
      return `File must be smaller than ${validation.maxSizeMB}MB`;
    }
  }

  return null;
}

function validateAll(fields: PublicFormField[], data: Record<string, any>) {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const message = validateField(field, data[field.name]);
    if (message) errors[field.name] = message;
  }
  return errors;
}

export default function DynamicForm({
  fields,
  onSubmit,
  submitLabel = "Submit Application",
}: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formKey, setFormKey] = useState(0);

  function handleChange(field: PublicFormField, value: any) {
    setFormData((prev) => {
      const next = { ...prev, [field.name]: value };
      setTouched((t) => ({ ...t, [field.name]: true }));
      const message = validateField(field, value);
      setErrors((prevErrors) => {
        const nextErrors = { ...prevErrors };
        if (message) {
          nextErrors[field.name] = message;
        } else {
          delete nextErrors[field.name];
        }
        return nextErrors;
      });
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const allTouched: Record<string, boolean> = {};
    for (const field of fields) allTouched[field.name] = true;
    setTouched(allTouched);

    const clientErrors = validateAll(fields, formData);
    setErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) {
      toast.error("Please fix the errors below.");
      return;
    }

    setStatus("submitting");

    try {
      const finalData: Record<string, any> = { ...formData };

      for (const field of fields) {
        if (field.type === "FILE" && formData[field.name] instanceof File) {
          const url = await uploadFile(formData[field.name], field.name);
          finalData[field.name] = url;
        }
      }

      const result = await onSubmit(finalData);

      if (result.success) {
        toast.success(
          "Your form has been submitted, we will contact you shortly",
        );
        setStatus("success");
        setFormData({});
        setErrors({});
        setTouched({});
        setFormKey((k) => k + 1);
      } else {
        setStatus("error");

        if (result.fieldErrors) {
          const flat: Record<string, string> = {};
          for (const [key, msgs] of Object.entries(result.fieldErrors)) {
            flat[key] = msgs[0];
          }
          setErrors(flat);
          toast.error(result.error ?? "Please fix the errors below.");
        } else {
          toast.error(result.error ?? "Something went wrong.");
        }
      }
    } catch (err: any) {
      setStatus("error");
      toast.error(err.message ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <form key={formKey} onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="_honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {fields.map((field) => (
        <div key={field.id}>
          <label className="block text-sm font-medium mb-2">
            {field.label}
            {field.required && (
              <span className="text-[var(--color-terminal-amber)] ml-1">*</span>
            )}
          </label>

          {renderInput(field, formData[field.name], (v) =>
            handleChange(field, v),
          )}

          {field.helpText && !errors[field.name] && (
            <p className="text-xs text-[var(--color-accent-muted)] mt-1">
              {field.helpText}
            </p>
          )}
          {touched[field.name] && errors[field.name] && (
            <p className="text-xs text-[var(--color-terminal-amber)] mt-1">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto bg-[var(--color-accent-main)] text-black font-mono text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}

function renderInput(
  field: PublicFormField,
  value: any,
  onChange: (v: any) => void,
) {
  const baseClasses =
    "w-full bg-[var(--color-card-main)] border border-[var(--color-card-stroke)] rounded-lg px-4 py-3 text-sm text-[var(--color-foreground-main)] placeholder:text-[var(--color-accent-muted)] focus:outline-none focus:border-[var(--color-terminal-blue)] transition";

  switch (field.type) {
    case "TEXTAREA":
      return (
        <textarea
          required={field.required}
          placeholder={field.placeholder ?? undefined}
          rows={4}
          value={value ?? ""}
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case "SELECT":
      return (
        <select
          required={field.required}
          className={baseClasses}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select...
          </option>
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );

    case "MULTISELECT":
      return (
        <div className="flex flex-wrap gap-2">
          {field.options?.map((opt) => {
            const selected: string[] = value ?? [];
            const isActive = selected.includes(opt.value);
            return (
              <button
                type="button"
                key={opt.value}
                onClick={() =>
                  onChange(
                    isActive
                      ? selected.filter((v) => v !== opt.value)
                      : [...selected, opt.value],
                  )
                }
                className={`text-xs font-mono px-3 py-2 rounded-full border transition ${
                  isActive
                    ? "bg-[var(--color-accent-main)] text-black border-[var(--color-accent-main)]"
                    : "border-[var(--color-card-stroke)] text-[var(--color-accent-muted)] hover:border-[var(--color-terminal-blue)]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      );

    case "RADIO":
      return (
        <div className="flex flex-col gap-3">
          {field.options?.map((opt) => {
            const isActive = value === opt.value;
            return (
              <label
                key={opt.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={field.name}
                  value={opt.value}
                  checked={isActive}
                  required={field.required}
                  onChange={(e) => onChange(e.target.value)}
                  className="peer sr-only"
                />
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center transition ${
                    isActive
                      ? "border-[var(--color-terminal-blue)]"
                      : "border-[var(--color-card-stroke)] group-hover:border-[var(--color-accent-muted)]"
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-terminal-blue)]" />
                  )}
                </span>
                <span className="text-sm text-[var(--color-foreground-main)]">
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>
      );

    case "CHECKBOX":
      return (
        <label className="flex items-center gap-2 text-sm text-[var(--color-accent-muted)]">
          <input
            type="checkbox"
            checked={!!value}
            required={field.required}
            onChange={(e) => onChange(e.target.checked)}
            className="accent-[var(--color-terminal-green)]"
          />
          {field.placeholder ?? "I agree"}
        </label>
      );

    case "FILE": {
      const validation = getValidation(field);

      return (
        <input
          type="file"
          required={field.required}
          accept={validation?.allowedTypes?.join(",") ?? undefined}
          className="w-full text-sm text-[var(--color-accent-muted)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[var(--color-accent-main)] file:text-black file:text-sm file:font-mono file:cursor-pointer"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) {
              onChange(undefined);
              return;
            }

            const maxSizeMB = validation?.maxSizeMB;
            if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
              e.target.value = "";
              onChange(undefined);
              return;
            }

            onChange(file);
          }}
        />
      );
    }

    default:
      return (
        <input
          type={field.type.toLowerCase()}
          required={field.required}
          placeholder={field.placeholder ?? undefined}
          value={value ?? ""}
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
}