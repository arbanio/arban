import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arban",
  description: "The most decent perfume website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
