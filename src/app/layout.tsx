import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Prompt Generator - Prioriwise",
  description: "Generate personalized portfolio website prompts for Lovable. Perfect for founders and developers.",
  keywords: "portfolio, prompt generator, Lovable, founders, developers",
  authors: [{ name: "Prioriwise" }],
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
