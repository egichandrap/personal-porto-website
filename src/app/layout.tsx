import type { Metadata } from "next";
import Script from "next/script";
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

const SITE_URL = "https://dashboard-egichandrap.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "fGqkj2QTlOrkWDfDKdc3__3n1_WMgjK5syXmdYFxIKc",
  },
  alternates: {
    canonical: "/",
  },
  title: "Egi Chandra Pratama — Backend Engineer (Java & Go)",
  description:
    "Backend engineer specializing in Java and Go. Since 2020, building distributed and high-scale backend systems across telecom, fintech, and gov-tech.",
  openGraph: {
    title: "Egi Chandra Pratama — Backend Engineer (Java & Go)",
    description:
      "Backend engineer specializing in Java and Go, building distributed and high-scale backend systems across telecom, fintech, and gov-tech.",
    type: "website",
    url: "/",
    siteName: "Egi Chandra Pratama — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egi Chandra Pratama — Backend Engineer (Java & Go)",
    description:
      "Backend engineer specializing in Java and Go, building distributed and high-scale backend systems across telecom, fintech, and gov-tech.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Egi Chandra Pratama",
                jobTitle: "Backend Engineer",
                worksFor: { "@type": "Organization", name: "SALT" },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Jakarta",
                  addressCountry: "ID",
                },
                knowsAbout: [
                  "Java",
                  "Go",
                  "Microservices",
                  "Distributed Systems",
                  "Kafka",
                  "PostgreSQL",
                  "Clean Architecture",
                ],
                sameAs: [
                  "https://github.com/egichandrap",
                  "https://www.linkedin.com/in/egichandrapratama/",
                  "https://www.instagram.com/masegiiiiiii/",
                ],
              },
            }),
          }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8S2VEEVJKF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8S2VEEVJKF');
          `}
        </Script>
      </body>
    </html>
  );
}
