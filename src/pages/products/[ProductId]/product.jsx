import SimilarProduct from "@/web/components/business/SimilarProduct"
import axios from "axios"
import routes from "@/web/routes.js"
import Carousel from "@/web/components/business/Carousel"
import { useContext, useEffect, useState } from "react"
import CartContext from "@/Context/CartContext"

export const getServerSideProps = async ({ req: { url } }) => {
  const query = Object.fromEntries(
    new URL(`http://localhost:3000/${url}`).searchParams.entries()
  )

  // const productId = context.params;
  const parts = url.split("/")

  const { data } = await axios.get(
    `http://localhost:3000/api${routes.api.product(parts[2], query)}`
  )

  return {
    props: {
      product: data,
    },
  }
}

const productpage = (props) => {
  const {
    product: { result },
  } = props

  const [quantity, setQuantity] = useState(1)
  const similarProducts = props.product.resultSimilarProduct
  const [disableOrderButton, setDisableOrderButton] = useState(false)
  const { dispatch } = useContext(CartContext)



  const handleQuantityChange = (e) => {
    const quantityTmp = Number(e.target.value)
    setQuantity(quantityTmp)
  }

  useEffect(() => {
    if (Number(result[0].quantity < quantity)) {
      setDisableOrderButton(true)
    } else {
      setDisableOrderButton(false)
    }
  }, [quantity])

  const handleAddToCart = async () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: result[0].id,
        name: result[0].name,
        description: result[0].description,
        price: result[0].price,
        quantity,
      },
    });

    try {
      await fetch(`http://localhost:3000/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          productId: result[0].id,
          quantity
        }),
      })
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          <div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-col flex-col lg:gap-8 sm:gap-6 gap-4 mr-16">
            <Carousel />
            <div className="flex justify-around">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                alt="mini"
                className="h-[88px] w-[119px] mr-2"
              />
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                alt="mini"
                className="h-[88px] w-[119px] mr-2"
              />
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                alt="mini"
                className="h-[88px] w-[119px]"
              />
            </div>
          </div>

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <span className=" font-bold lg:text-3xl text-xl lg:leading-6 leading-5 mt-6 ">
              <p>{result[0].name}</p>
            </span>
            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              {result[0].description}
            </p>

            <div className="lg:mt-11 flex justify-between mt-10">
              <div className="flex flex-col ">
                <p className=" font-medium text-base leading-4 text-gray-600 mb-4">
                  Quantité
                </p>
                <div>
                  <input
                    id="counter"
                    value={quantity}
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="number"
                    onChange={handleQuantityChange}
                    min={1}
                  />
                </div>
              </div>
              <div>
                <div>
                  <button
                    disabled
                    className="mb-[50px] bg-gradient-to-b from-gray-300 to-blue-700 shadow-md rounded-2xl w-[200px] font-semibold text-shadow-md text-2xl h-[76px] "
                  >
                    {result[0].price} TTC
                  </button>
                </div>
                <button
                  disabled={disableOrderButton}
                  onClick={handleAddToCart}
                  className="bg-white shadow-md font-semibold text-2xl text-center p-4 w-[198px] h-[76px] flex items-center"
                >
                  {!disableOrderButton ? "Ajouter au panier" : "Stock épuisé"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            Des produits similaires
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {similarProducts.map(function (similar, key) {
              return (
                <SimilarProduct
                  title={similar.name}
                  price={similar.price}
                  key={key}
                  quantity={similar.quantity}
                  id={similar.id}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default productpage
