export type FieldType =
  | "TEXT"
  | "EMAIL"
  | "TEL"
  | "NUMBER"
  | "DATE"
  | "URL"
  | "TEXTAREA"
  | "SELECT"
  | "MULTISELECT"
  | "RADIO"
  | "CHECKBOX"
  | "FILE";

export type SubmissionStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
  maxSizeMB?: number;
  allowedTypes?: string[];
}

export interface FormField {
  id: string;
  formType: string;
  label: string;
  name: string;
  type: FieldType;
  placeholder: string | null;
  helpText: string | null;
  required: boolean;
  order: number;
  isActive: boolean;
  options: FieldOption[] | null;
  validation: FieldValidation | null;
  createdAt: Date;
  updatedAt: Date;
}

export type PublicFormField = Pick<
  FormField,
  | "id"
  | "name"
  | "label"
  | "type"
  | "required"
  | "placeholder"
  | "helpText"
  | "options"
>;

export type CreateFormFieldInput = Omit<
  FormField,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateFormFieldInput = Partial<CreateFormFieldInput> & {
  id: string;
};

export interface FormSubmission {
  id: string;
  formType: string;
  data: Record<string, any>;
  status: SubmissionStatus;
  reviewedBy: string | null;
  reviewedAt: Date | null;
  notes: string | null;
  createdAt: Date;
}