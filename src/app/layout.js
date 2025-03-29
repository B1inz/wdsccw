import Navbar from "./components/header/header"
import Footer from "./components/footer/footer"

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
    <html lang="en">
      <body style={{ margin: "0px" }}>
        <Navbar/>
        {children}
        <Footer></Footer>
       
      </body>
    </html>
  )
}
