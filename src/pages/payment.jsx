import Transaction from "@/components/business/FormTransaction"
import Footer from "@/components/business/Footer"
import Header from "@/components/business/Header"
import routes from "@/routes"

const payment = () => {
  return (
    <div>
      <Header />
      <div class="m-20">
        <h1 class="text-3xl font-semibold flex justify-center">Payer</h1>
        <Transaction />
        <a href={routes.orderConfirm}>
          <Button class="bg-sky-900 hover:bg-sky-800 text-white font-semibold py-2 px-4 border-b-4 border-sky-800 hover:border-sky-700 rounded mx-8 my-8" type="submit">
            payer
          </Button>
        </a>
        <a href={routes.home}> Annuler </a>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default payment
