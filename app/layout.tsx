import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Terrifico",
  description: "The best food on the world wide web",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const theme = 'light';
  // light, dark, cupcake (tailwind.config.ts contains these (daisyUI theme))


  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
