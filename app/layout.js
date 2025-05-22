import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { degularSemibold, trumpGothicRegular } from "@/font-loader/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zeniq",
  description: "Let's Work Together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${trumpGothicRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
