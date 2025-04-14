import Navbar from "./components/header/header"
import Footer from "./components/footer/footer"

export const metadata = {
  title: {
    template: 'David Ferreira | %s',
    default: 'David Ferreira',
  },
  description: 'Learn more about city councilor David Ferreira and his vision to improve Ward 13 and London'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="HIjmi1S2S82dWzvh9XXnVJq2h9VUHxbehUwxETmAQbw" />
      </head>
      <body style={{ margin: "0px" }}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
