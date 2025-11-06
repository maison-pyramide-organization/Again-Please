import type { Metadata } from "next";
import "@a/utils.css";
import "@a/reset.css";
import Lenis from "@/components/lenis";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bg from "@/components/bg";
import Animation from "@/components/Animation";
import { FontsProvider } from "@/contexts/fontsContext";
import { DimensionProvider } from "@/contexts/dimensionsContext";

export const metadata: Metadata = {
  title: "Again Please",
  description:
    "End-to-End Reusable Packaging Solutions for Events, Venues & HoReCa Spaces ",
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
                <Animation />
              </div>
            </FontsProvider>
          </DimensionProvider>
        </Lenis>
      </body>
    </html>
  );
}
