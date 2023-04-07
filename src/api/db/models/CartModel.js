import BaseModel from "./BaseModel.js"
import UserModel from "./UserModel.js"
import ProductModel from "./ProductModel.js"

class CartModel extends BaseModel {
  static get tableName() {
    return "carts"
  }

  static get relationMappings() {
    return {
      user: {
        modelClass: UserModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "carts.userId",
          to: "users.id",
        },
      },
      product: {
        modelClass: ProductModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "carts.productId",
          to: "products.id",
        },
      },
    }
  }
  static async getUserProducts(userId) {
    try {
      const userProducts = await this.query()
        .select("products.*", "carts.quantity")
        .where("userId", userId)
        .join("products", "carts.productId", "products.id")

      return userProducts
    } catch (error) {
      throw new Error("Server error")
    }
  }
}

export default CartModel
