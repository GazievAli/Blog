import "./globals.css";
import React from "react";
import Link from "next/link";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Header />
        {children}
        <div className="mt-2 text-gray-400">
          <p><Link href={"/About"}>About</Link></p>
          <p><Link href={"/Blog"}>Blog</Link></p>
          <p><Link href={"/Contacts"}>Contacts</Link></p>
          <p><Link href={"/Projects"}>Projects</Link></p>
          <p><Link href={"/Skills"}>Skills</Link></p>
          <p><Link href={"/"}>Home</Link></p>
        </div>
        <Footer />
      </body>
    </html>
  );
}
