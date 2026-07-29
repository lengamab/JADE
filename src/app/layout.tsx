import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JADE IA",
  description: "Experience the future of connection with JADE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
