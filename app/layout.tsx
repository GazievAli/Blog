import "./globals.css";
import React from "react";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>

    );
}

// <p><Link href={"/Contacts"} onClick={ChangeActiveLink}>Contacts</Link></p>
