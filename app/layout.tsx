
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from 'next';
import Navigation from "./component/navigation/navigation";
import Footer from './component/footer/footer';
// import ParticlesBackground from "./../app/component/UI/particle";
import SessionProvider from "./component/SessionProvider/SessionProvider";
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";



const myFont = localFont({
  src:'./../public/fonts/Jost-Regular.ttf'
})

export const metadata: Metadata = {
  title: 'Tio Store',
  description: 'Get your groceries from store.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={myFont.className}>
        <SessionProvider session={session}>
          <Navigation />
          {/* <ParticlesBackground /> */}
          <div style={{height:"100vh"}}>
            {children}
          </div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
