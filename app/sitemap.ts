import { MetadataRoute } from "next";
export const revalidate = false;
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ccp.spurvancelabs.com",
      priority: 1,
    },
    {
      url: "https://ccp.spurvancelabs.com/about",
      priority: 0.8,
    },
    {
      url: "https://ccp.spurvancelabs.com/events",
      priority: 0.8,
    },
    {
      url: "https://ccp.spurvancelabs.com/community",
      priority: 0.8,
    },
    {
      url: "https://ccp.spurvancelabs.com/volunteer",
      priority: 0.8,
    },
    {
      url: "https://ccp.spurvancelabs.com/partnership",
      priority: 0.8,
    },
  ];
}