import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import dynamic from "next/dynamic";
import Navbar from "./components/navBar/navBar";
import { ToastContainer } from 'react-toastify';

const FooterComponent = dynamic(() => import("../../pages/footer"), {
  ssr: false,
});
const NavBarComponent = dynamic(() => import("../../pages/navBar"), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestão de Eventos",
  description: "Plataforma de Gestão de Eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastContainer />
          <Navbar />
          {children}
          <FooterComponent />
        </body>
      </html>
    </ClerkProvider>
  );
}
