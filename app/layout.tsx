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

const description =
  "macOS hides two thirds of the processes on your Mac. Runwell shows you the rest, tells you it's the rest, and never invents the difference.";

export const metadata: Metadata = {
  metadataBase: new URL("https://runwell.app"),
  title: "Runwell — A battery monitor that admits what it can't see",
  description,
  openGraph: {
    title: "Runwell — A battery monitor that admits what it can't see",
    description,
    type: "website",
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
