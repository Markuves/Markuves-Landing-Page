import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { translations } from "./i18n";
import { LanguageProvider } from "./language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: translations.en.meta.title,
  description: translations.en.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-zinc-50 antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
          <LanguageProvider>{children}</LanguageProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

