import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentLine | AI Receptionist for South African Service Pros",
  description:
    "AgentLine answers calls, qualifies leads, and books appointments 24/7 so South African service professionals never miss a customer.",
  metadataBase: new URL("https://agentic-5aa47b33.vercel.app"),
  openGraph: {
    title: "AgentLine | AI Receptionist for South African Service Pros",
    description:
      "Always-on AI receptionist that answers calls, qualifies leads, and schedules bookings for busy South African service professionals.",
    url: "https://agentic-5aa47b33.vercel.app",
    siteName: "AgentLine",
    images: [{ url: "/og-agentline.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentLine | AI Receptionist for South African Service Pros",
    description:
      "Never miss a lead again. AgentLine handles calls, qualification, and bookings 24/7.",
    images: ["/og-agentline.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
