"use client"
import { Suspense } from "react";
import Navbar from "./components/header/header"
import Footer from "./components/footer/footer"
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: {
    template: 'David Fierra | %s',
    default: 'David Fierra',
  },
  description: 'Learn more about city councilor David Fierra',
  keywords: "david fierra, ward 13, london city councilor, london election, london ward 13"
}

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body style={{ margin: "0px" }}>
          <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer></Footer>
        
        </body>
      </html>
    </SessionProvider>

  )
}
