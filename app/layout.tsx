import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = "Runwell — A battery monitor that admits what it can't see";

const description =
  "macOS hides two thirds of the processes on your Mac. Runwell shows you the rest, tells you it's the rest, and never invents the difference. Free, open source, and everything stays on your Mac.";

export const metadata: Metadata = {
  metadataBase: new URL("https://runwell.meerbahadin.dev"),
  title,
  description,
  applicationName: "Runwell",
  keywords: [
    "macOS battery monitor",
    "battery life",
    "energy usage",
    "Activity Monitor alternative",
    "Mac app",
    "open source",
  ],
  authors: [{ name: "Meer Bahadin", url: "https://github.com/meerbahadin" }],
  creator: "Meer Bahadin",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Runwell",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
