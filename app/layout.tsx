import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rojina Duwal — Quality Assurance Engineer Portfolio",
  description:
    "Portfolio of Rojina Duwal, a Quality Assurance Engineer based in Bhaktapur, Nepal specializing in manual software testing, functional verification, test case design, and web quality assurance.",
  keywords: [
    "Rojina Duwal",
    "QA Engineer",
    "Quality Assurance",
    "Software Testing",
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Bhaktapur Nepal",
  ],
  authors: [{ name: "Rojina Duwal" }],
  openGraph: {
    title: "Rojina Duwal — Quality Assurance Engineer Portfolio",
    description:
      "Dedicated QA Engineer with practical experience in manual testing, web applications, test case design, and defect management.",
    type: "website",
    images: ["/assets/images/portrait-placeholder.svg"],
  },
  icons: {
    icon: "/assets/images/favicon.svg",
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
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
