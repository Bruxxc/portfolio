import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Introduction from "./components/introduction";
import CoverParticles from "./components/cover-particles";
//LAYOUT SE COMPRATE ENTRE LAS PÁGINAS


const urbanist= Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Bruno Condenanza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        
        <Header/>
          
        <Introduction/>

        <CoverParticles/>
 
       
        {children}
        
      </body>
    </html>
  );

}
