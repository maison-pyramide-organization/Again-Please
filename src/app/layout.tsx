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
  title: "Again, Please by Polygreen | Reusable Foodware & Cup System",
  description: `Again, Please delivers end-to-end reusable cups and foodware: design, co-branding, logistics, collection, industrial washing, and redistribution.`,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Again, Please by Polygreen | Reusable Foodware & Cup System",
    description: `Again, Please delivers end-to-end reusable cups and foodware: design, co-branding, logistics, collection, industrial washing, and redistribution.`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Again Please",
              url: "https://againplease.com",
              logo: "https://againplease.com/logo.png",
            }),
          }}
        />
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
