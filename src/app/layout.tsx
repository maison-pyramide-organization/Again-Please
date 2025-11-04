import type { Metadata } from "next";
import "@a/utils.css";
import "@a/reset.css";
import Lenis from "@/components/lenis";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bg from "@/components/bg";
import Animation from "@/components/Animation";

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
          <div id="p_">
            <Header />
            {children}
            <Footer />
            {/* <Bg /> */}
            {/* <Animation /> */}
          </div>
        </Lenis>
      </body>
    </html>
  );
}
