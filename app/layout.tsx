
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from 'next';
import Navigation from "./component/navigation/navigation";
import Footer from './component/footer/footer';
// import ParticlesBackground from "./../app/component/UI/particle";

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
        {/* <ParticlesBackground /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
