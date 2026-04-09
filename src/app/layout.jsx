import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Component/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "BharatInvesto — Smart Investing for Indian Markets",
  description: "Data-driven strategies and real-time market analysis to help you invest with confidence. Access intelligent insights, track market trends, and uncover high-potential opportunities.",
  keywords: "stock market India, NSE, BSE, investing, portfolio tracker, stock analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
