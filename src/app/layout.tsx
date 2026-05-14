import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mikael ja Mikker - kodumaine podcast",
  description: "Mikael Meema podcast, kus kuulajate häälsõnumitena saadetud lood ja küsimused saavad vastused. Kuula uusimaid episoode Spotify’s ja YouTube’is",
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: "Mikael ja Mikker - kodumaine podcast",
    description: "Mikael Meema podcast, kus kuulajate häälsõnumitena saadetud lood ja küsimused saavad vastused. Kuula uusimaid episoode Spotify’s ja YouTube’is",
    url: "https://www.mikaeljamikker.ee",
    siteName: "Mikael ja Mikker",
    images: [
      {
        url: "https://www.mikaeljamikker.ee/mikaeljamikker_art.jpg",
        width: 1200,
        height: 630,
        alt: "Mikael ja Mikker Podcast illustratsioon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikael ja Mikker - kodumaine podcast",
    description: "Kuula Mikael ja Mikker podcasti.",
    images: ["https://www.mikaeljamikker.ee/mikaeljamikker_art.jpg"],
  },
  keywords: [
    "Mikael ja Mikker",
    "Eesti podcast",
    "kuulajate lood",
    "dilemmad",
    "küsimused",
    "Spotify",
    "YouTube",
  ],  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="et">
        <body className={`${nunitoSans.variable} antialiased`}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {/* Schema.org JSON-LD for Podcast */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@id": "https://www.mikaeljamikker.ee/#podcast",
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              "name": "Mikael ja Mikker Podcast",
              "url": "https://www.mikaeljamikker.ee",
              "description": "Kuula Mikael ja Mikker podcasti, kus kuulajate lood ja küsimused saavad vastused.",
              "image": "https://www.mikaeljamikker.ee/mikaeljamikker_art.jpg",
              "keywords": ["Mikael ja Mikker", "Eesti podcast", "kuulajate lood", "dilemmad", "Spotify", "YouTube"],
              "creator":{
              "@type": "Person", "name": "Mikael Meema" },
              "publisher": {
                "@type": "Organization",
                "name": "Mikael ja Mikker",
                "url": "https://www.mikaeljamikker.ee"
              },
              "sameAs": [
                "https://www.youtube.com/@MikaelJaMikker",
                "https://open.spotify.com/show/5ucZpdw230SJCQilS3yJ8H",
                "https://www.instagram.com/mikaeljamikker/"
              ]
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
