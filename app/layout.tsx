import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Abdo — Project Manager & Digital Marketing Specialist",
  description:
    "Project Manager & Digital Marketing Specialist with 4+ years driving KPI-crushing campaigns across Lebanon, Ghana, Martinique & KSA. SEO · Paid Ads · Branding.",
  keywords: [
    "Project Manager",
    "Digital Marketing",
    "SEO Specialist",
    "Lebanon",
    "Brand Management",
    "Meta Ads",
    "Ibrahim Abdo",
  ],
  authors: [{ name: "Ibrahim Abdo" }],
  openGraph: {
    title: "Ibrahim Abdo — Project Manager & Digital Marketing Specialist",
    description:
      "Bold campaigns. Measurable growth. Cross-border brand leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-aurora">{children}</body>
    </html>
  );
}
