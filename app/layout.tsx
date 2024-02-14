import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
// sessionok
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Terrifico",
  description: "The best food on the world wide web",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = "retro";
  // light, dark, retro (tailwind.config.ts contains these (daisyUI theme))
  const session = await getServerSession();

  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar />
          <main className="[&>*]:pb-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
