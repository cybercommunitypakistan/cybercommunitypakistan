-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('TEXT', 'EMAIL', 'TEL', 'NUMBER', 'DATE', 'URL', 'TEXTAREA', 'SELECT', 'MULTISELECT', 'RADIO', 'CHECKBOX', 'FILE');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "FormField" (
    "id" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FieldType" NOT NULL,
    "placeholder" TEXT,
    "helpText" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "options" JSONB,
    "validation" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FormField_formType_order_idx" ON "FormField"("formType", "order");

-- CreateIndex
CREATE UNIQUE INDEX "FormField_formType_name_key" ON "FormField"("formType", "name");

-- CreateIndex
CREATE INDEX "FormSubmission_formType_status_idx" ON "FormSubmission"("formType", "status");
