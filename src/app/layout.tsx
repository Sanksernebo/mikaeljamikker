import type { Metadata } from "next";
import Head from "next/head";
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
  openGraph: {
    title: "Mikael ja Mikker Podcast",
    description: "Eesti podcast, kus kuulajate lood ja küsimused saavad vastused. Kuula uusimaid episoode Spotify’s ja YouTube’is.",
    url: "https://www.mikaeljamikker.ee",
    siteName: "Mikael ja Mikker",
    images: [
      {
        url: "/mikaeljamikker_art.svg",
        width: 1200,
        height: 1200,
        alt: "Mikael ja Mikker Podcast illustratsioon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikael ja Mikker Podcast",
    description: "Kuula Mikael ja Mikker podcasti.",
    images: ["/mikaeljamikker_art.svg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${nunitoSans.variable} antialiased`}>
          <Head>
          <meta
            name="keywords"
            content="Mikael ja Mikker, Eesti podcast, kuulajate lood, dilemmad, küsimused, Spotify, YouTube"
          />
        </Head>
        <GoogleAnalytics gaId="G-N129FRG3M5" />

        {/* Schema.org JSON-LD for Podcast */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              "name": "Mikael ja Mikker Podcast",
              "url": "https://www.mikaeljamikker.ee",
              "description": "Kuula Mikael ja Mikker podcasti, kus kuulajate lood ja küsimused saavad vastused.",
              "image": "https://www.mikaeljamikker.ee/mikaeljamikker_art.svg",
              "keywords": ["Mikael ja Mikker", "Eesti podcast", "kuulajate lood", "dilemmad", "Spotify", "YouTube"]
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
