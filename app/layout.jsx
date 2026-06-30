import './globals.css'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export const metadata = {
  title: 'Luna Kids | Moda Infantil Andaluza',
  description: 'Cosemos la infancia a fuego lento. Vestidos hechos a mano en el sur para que tu pequeña no deje de bailar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Dancing+Script:wght@400..700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-vichy min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
