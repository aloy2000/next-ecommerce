import axios from "axios"
import routes from "@/web/routes.js"

export const getServerSideProps = async ({ req: { url } }) => {
  const query = Object.fromEntries(
    new URL(`http://example.com/${url}`).searchParams.entries()
  )

  const { data } = await axios.get(
    `http://localhost:3000/api${routes.api.cart(1, query)}`
  )

  return {
    props: {
      cart: data,
    },
  }
}

const CartPage = (props) => {
  const {
    cart: { result },
  } = props
  let total = 0
  const tva = 0.21
  Object.values(result).map((res) => (total += res["price"] * res["quantity"]))
  let totalTva = total * tva

  return (
    <div>
      <h1 className="mt-12 mb-16 text-center text-5xl font-bold">Panier</h1>
      <div className="md:gap-42 grid h-96 grid-cols-1 md:grid-cols-2 xl:gap-64">
        <div className=" order-1 overflow-scroll  px-16 xl:px-24">
          {Object.values(result).map((res, index) => (
            <div key={index} className="mb-8 flex xl:text-justify">
              <div>
                <p className="font-bold">{res["name"]}</p>
                <p>{res["description"]}</p>
              </div>

              <div className="ml-12">
                <p className="font-bold">{res["price"]} €</p>
                <p className="ml-14">{res["quantity"]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" order-2 px-16 text-3xl font-bold xl:px-24">
          <div className="flex justify-between">
            <p>TOTAL</p>
            <p>{total} €</p>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <p>TVA</p>
            <p>{totalTva} €</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
