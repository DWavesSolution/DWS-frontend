"use client";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      // once: false,
    });
  }, []);
  return (
    <html lang="en">
      <Header />
      {children}
      <Footer />
    </html>
  );
}
