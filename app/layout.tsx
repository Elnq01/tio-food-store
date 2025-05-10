
import Link from 'next/link'
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from 'next';
import Navigation from "./component/navigation/navigation";

const myFont = localFont({
  src:'./../public/fonts/Jost-Regular.ttf'
})

export const metadata: Metadata = {
  title: 'Tio Store',
  description: 'Get your groceries from store.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
