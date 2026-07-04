"use client";

import { useState } from "react";
import { PublicFormField } from "@/types/form";
import { uploadFile } from "@/lib/uploadFile";
import { submitVolunteerForm } from "@/actions/volunteer";

export default function VolunteerForm({
  fields,
}: {
  fields: PublicFormField[];
}) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  function handleChange(name: string, value: any) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    try {
      const finalData: Record<string, any> = { ...formData };

      for (const field of fields) {
        if (field.type === "FILE" && formData[field.name] instanceof File) {
          const url = await uploadFile(formData[field.name], field.name);
          finalData[field.name] = url;
        }
      }

      const result = await submitVolunteerForm(finalData);

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        if (result.fieldErrors) {
          const flat: Record<string, string> = {};
          for (const [key, msgs] of Object.entries(result.fieldErrors)) {
            flat[key] = msgs[0];
          }
          setErrors(flat);
        } else {
          setErrors({ general: result.error });
        }
      }
    } catch (err: any) {
      setStatus("error");
      setErrors({
        general: err.message ?? "Something went wrong. Please try again.",
      });
    }
  }

  if (status === "success") {
    const lines = [
      "> validating submission...  OK",
      "> writing to queue...  OK",
      "> application received",
    ];

    return (
      <div className="terminal-card rounded-xl p-8">
        <div className="font-mono text-sm space-y-2 mb-6">
          {lines.map((line, i) => (
            <p
              key={line}
              className="text-[var(--color-terminal-green)] opacity-0"
              style={{
                animation: `typeLine 0.4s ease forwards`,
                animationDelay: `${i * 220}ms`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2">
          You&rsquo;re in the queue.
        </h2>
        <p className="text-[var(--color-accent-muted)] text-sm">
          We&rsquo;ll review your application and reach out within a week.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            handleChange(field.name, v),
          )}

          {field.helpText && (
            <p className="text-xs text-[var(--color-accent-muted)] mt-1">
              {field.helpText}
            </p>
          )}
          {errors[field.name] && (
            <p className="text-xs text-[var(--color-terminal-amber)] mt-1">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      {/* Add the I'm not a Robot Validation here */}

      {errors.general && (
        <p className="text-sm text-[var(--color-terminal-amber)]">
          {errors.general}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto bg-[var(--color-accent-main)] text-black font-mono text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
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
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case "SELECT":
      return (
        <select
          required={field.required}
          className={baseClasses}
          defaultValue=""
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
            required={field.required}
            onChange={(e) => onChange(e.target.checked)}
            className="accent-[var(--color-terminal-green)]"
          />
          {field.placeholder ?? "I agree"}
        </label>
      );

    case "FILE": {
      const validation = (
        field as PublicFormField & {
          validation?: {
            allowedTypes?: string[];
            maxSizeMB?: number;
          };
        }
      ).validation;

      return (
        <input
          type="file"
          required={field.required}
          accept={validation?.allowedTypes?.join(",") ?? undefined}
          className="w-full text-sm text-[var(--color-accent-muted)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[var(--color-accent-main)] file:text-black file:text-sm file:font-mono file:cursor-pointer"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const maxSizeMB = validation?.maxSizeMB;
            if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
              alert(`File must be smaller than ${maxSizeMB}MB`);
              e.target.value = "";
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
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
}
