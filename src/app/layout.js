import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qazi's Portfolio Site :)",
  description: "Explore Qazi Ayan's personal projects, skills, and creative work — all in one place.",
  authors: [{ name: 'Qazi Ayan' }],
  openGraph: {
    title: "Qazi Ayan's Personal Portfolio Site :)",
    description: "Explore Qazi Ayan's personal projects, skills, and creative work — all in one place.",
    url: 'https://qazi-ayan.vercel.app/',
    siteName: "Qazi Ayan's Portfolio",
    images: [
      {
        url: 'https://qazi-ayan.vercel.app/_next/image?url=%2Fmeyay.png&w=640&q=75', 
        width: 1200,
        height: 630,
        alt: 'Qazi Ayan Preview Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Qazi Ayan's Personal Portfolio Site :)",
    description: "Explore Qazi Ayan's personal projects, skills, and creative work — all in one place.",
    images: ['https://qazi-ayan.vercel.app/_next/image?url=%2Fmeyay.png&w=640&q=75'],
  },

};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
