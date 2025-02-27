import type { Metadata } from "next";
import { Nunito, PT_Sans } from "next/font/google";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],

});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "darplants",
  description: "developed by darHH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
