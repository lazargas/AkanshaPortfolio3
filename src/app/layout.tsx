"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/Navbar/NavbarWrapper";
import { PortfolioProvider } from "@/context/Portfolio";
import { Navbar } from "@/components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store"

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        
        <Provider store={store} >
          <PortfolioProvider>
          {children}
          </PortfolioProvider>
        </Provider>
      </body>
    </html>
  );
}
