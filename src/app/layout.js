import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./provider"; // Adjust the path as necessary
import "./globals.css";
import Navbar from "./components/Navebar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Breeze",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Providers>
        <Navbar/>
      
        
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
