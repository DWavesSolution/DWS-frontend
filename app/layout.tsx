"use client";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Work_Sans, Nunito } from "next/font/google";

const fontWorkSans = Work_Sans({
  weight: ["900", "700", "600", "500", "400"],
  subsets: ["vietnamese"],
  variable: "--work-Sans",
});
const fontNunito = Nunito({
  weight: ["900", "700", "600", "500", "400"],
  subsets: ["latin"],
  variable: "--nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <html
      lang="en"
      className={`${fontWorkSans.variable} ${fontNunito.variable}`}
    >
      <Header />
      {children}
      <Footer />
    </html>
  );
}
