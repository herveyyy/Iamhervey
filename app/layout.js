import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ClientComponents";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio-app",
  description: "App for me and for my achievements.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className="!scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
