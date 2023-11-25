import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      {children}
      <Footer />
    </html>
  );
}
