import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ToastProvider from "@/components/ToastProvider";



const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-mono",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});


export const metadata = {
    title: {
        default: "Cyber Community Pakistan",
        template: "%s | Cyber Community Pakistan",
    },
    description:
        "Open cybersecurity community in Pakistan focused on ethical hacking, research, CTFs, and collaboration.",
    metadataBase: new URL("https://ccp.spurvancelabs.com"),
    robots: {
        index: true,
        follow: true,
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
        className={`flex flex-col min-h-full ${jetbrainsMono.variable} ${firaCode.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
