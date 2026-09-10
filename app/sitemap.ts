import type { MetadataRoute } from "next";
import { projects, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const work = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/work`, lastModified: new Date() },
    ...work,
  ];
}
