import mw from "@/api/mw.js"
import validate from "@/api/middlewares/validate.js"
import CartModel from "@/api/db/models/CartModel.js"
import { idValidator } from "@/validators.js"

const handler = mw({
  POST: [
    validate({
      body: {
        userId: idValidator.required(),
        productId: idValidator.required(),
        quantity: idValidator.required(),
      },
    }),
    async ({
      locals: {
        body: { userId, productId, quantity },
      },
      res,
    }) => {
      try {
        const cart = await CartModel.query().insert({
          userId,
          productId,
          quantity,
        })

        res.send({
          result: cart,
        })
      } catch (err) {
        const error = err.response?.data?.error || "Oops. Something went wrong"

        return [Array.isArray(error) ? error : [error]]
      }
    },
  ],
  GET: [
    validate({
      query: {
        userId: idValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { userId },
      },
      res,
    }) => {
      try {
        console.log("*********************************")
        const cart = await CartModel.query()
          .select("products.*", "carts.quantity")
          .where("userId", userId)
          .join("products", "carts.productId", "products.id")

        if (!cart) {
          res.send({
            result: false,
          })
        }

        res.send({
          result: cart,
        })
      } catch (err) {
        const error = err.response?.data?.error || "Oops. Something went wrong"

        return [Array.isArray(error) ? error : [error]]
      }
    },
  ],
 

})

export default handler
