import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mountain View Dentist`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Smiles Dental Care in Mountain View, CA offers family, cosmetic, implant, Invisalign, and emergency dentistry. Call (650) 563-1180.",
  openGraph: {
    title: site.name,
    description:
      "Get a healthy, gorgeous smile at Smiles Dental Care in Mountain View - quality oral health in a comfortable setting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
