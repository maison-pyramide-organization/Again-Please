import type { Metadata } from "next";
import "@s/utils.css";
import "@s/reset.css";
import Lenis from "@/components/lenis";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bg from "@/components/bg";
import { FontsProvider } from "@/contexts/fontsContext";
import { DimensionProvider } from "@/contexts/dimensionsContext";

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
