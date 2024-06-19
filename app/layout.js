import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ClientComponents";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio-app",
  description: "App for me and for my achievements.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className="">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
