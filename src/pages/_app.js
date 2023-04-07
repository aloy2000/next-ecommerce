import "@/globals.css"
import Header from "@/web/components/business/Header"
import Footer from "@/web/components/business/Footer"
import CartContext from "@/Context/CartContext"
import { CartProvider } from "@/Context/CartProvider"

const App = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  )
}

export default App
