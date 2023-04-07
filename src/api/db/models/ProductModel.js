import BaseModel from "./BaseModel.js"
import MaterialModel from "./MaterialModel.js"
import CategoryModel from "./CategoryModel.js"
import CartModel from "./CartModel.js"

class ProductModel extends BaseModel {
  static get tableName() {
    return "products"
  }

  static get relationMappings() {
    return {
      material: {
        modelClass: MaterialModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "products.materialId",
          to: "materials.id",
        },
      },
      category: {
        modelClass: CategoryModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "products.categoryId",
          to: "categories.id",
        },
      },
      cart: {
        modelClass: CartModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "products.id",
          to: "carts.productId",
        },
      },
    }
  }
  static async getUserProducts(productId) {
    try {
      const userProducts = await this.query()
        .select("products.*", "quantity")
        .where("ProductId", productId)
        .join("carts", "carts.productId", "carts.id")

      return userProducts
    } catch (error) {
      throw new Error("Server error")
    }
  }
}

export default ProductModel
