import type { Metadata } from "next";
import "@s/utils.css";
import "@s/reset.css";
import Lenis from "@/components/lenis";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bg from "@/components/bg";
import { FontsProvider } from "@/contexts/fontsContext";
import { DimensionProvider } from "@/contexts/dimensionsContext";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.againplease.com"),
  alternates: {
    canonical: "/",
  },
  title: "Again, Please by Polygreen | Circular Reuse Solutions",
  description: `Practical circular economy solutions that replace single-use and disposables with reusable goods, streamlined operations, and proven impact through tracking and insights.`,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Again, Please by Polygreen | Circular Reuse Solutions",
    description: `Practical circular economy solutions that replace single-use and disposables with reusable goods, streamlined operations, and proven impact through tracking and insights.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FFX4E5QD0P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FFX4E5QD0P');
          `}
        </Script>
      </head>
      <body>
        <Lenis>
          <DimensionProvider>
            <FontsProvider>
              <div id="p_" className="d-s">
                <Header />
                {children}
                <Footer />
                <Bg />
              </div>
            </FontsProvider>
          </DimensionProvider>
        </Lenis>
      </body>
    </html>
  );
}
