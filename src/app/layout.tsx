import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mikael ja Mikker",
  description: "Koduleht Mikael ja Mikker podcastile",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${nunitoSans.variable} antialiased`}>
        <GoogleAnalytics gaId="G-N129FRG3M5" />
        {children}
      </body>
    </html>
  );
}
