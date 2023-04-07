import Header from "@/components/business/Header"
import Footer from "@/components/business/Footer"
import Button from "@/components/ui/Button"
import routes from "@/routes"

const OrderConfirm = () => {
  return (
    <div>
      <Header />
      <div className="py-40">
        <h1 className="text-4xl flex justify-center">
          Confirmation de votre achat
        </h1>
        <p className="flex text-xl justify-center px-20 py-15">
          Merci de votre achat votre commande a bien été enregistrer sous le
          numero (numero de commande).
        </p>
        <p className="flex text-xl justify-center px-20 py-15">
          Vous pouvez suivre son état depuis votre espace client.
        </p>
        <div className="px-[45%]">
          <a href={routes.home}>
            <Button className="px-4 py-4 bg-blue-700 hover:bg-blue-800 rounded-xl text-white flex justify-center">
              Retourner à l'accueil
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default OrderConfirm
