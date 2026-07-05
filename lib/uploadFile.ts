"use client";

import { createBrowserClient } from "@supabase/ssr";

console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("KEY starts with:", process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.slice(0, 15));

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

export async function uploadFile(
  file: File,
  fieldName: string,
): Promise<string> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${fieldName}-${crypto.randomUUID()}.${fileExt}`;
  const filePath = `volunteer-submissions/${fileName}`;

  const { error } = await supabase.storage
    .from("form-uploads")
    .upload(filePath, file);
  if (error) throw new Error("File upload failed: " + error.message);

  const { data } = supabase.storage.from("form-uploads").getPublicUrl(filePath);
  return data.publicUrl;
}
