// app/robots.ts
import { MetadataRoute } from "next";

// ✅ Add this line to tell Next.js this is a static route
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ccp.spurvancelabs.com/sitemap.xml",
  };
}