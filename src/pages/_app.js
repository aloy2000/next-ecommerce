import "@/globals.css"
import Header from "@/web/components/business/Header"
import Footer from "@/web/components/business/Footer"
import { CartProvider } from "@/Context/CartProvider"
import routes from "@/web/routes"


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
