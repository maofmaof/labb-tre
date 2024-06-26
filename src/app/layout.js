import Navbar from "./components/navbar"
import Footer from "./components/footer.js"
import {  Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className}>
      <body>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
