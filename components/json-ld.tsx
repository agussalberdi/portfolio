import { site } from "@/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location,
    },
    sameAs: site.socials
      .map((social) => social.href)
      .filter((href) => href.startsWith("http")),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
