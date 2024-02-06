"use client";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Work_Sans, Nunito } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

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
      <head>
        <meta
          name="google-site-verification"
          content="TIaNJRqYwksSUyiiCPHo71cwx3MODspK5v9DOInYfbM"
        />
      </head>
      <Header />
      {children}
      <Footer />
    </html>
  );
}
