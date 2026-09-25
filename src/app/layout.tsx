import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Providers from "./providers";
import AppNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import TopBannerAd from "@/components/public/TopBannerAd";

export const metadata: Metadata = {
  title: "BharatAbroad",
  description: "News and heritage for the Indian diaspora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppNavbar />
          <TopBannerAd />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
