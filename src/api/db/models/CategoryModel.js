import BaseModel from "./BaseModel.js"
import ProductModel from "./ProductModel.js"

class CategoryModel extends BaseModel {
  static get tableName() {
    return "categories"
  }

  static get relationMappings() {
    return {
      product: {
        modelClass: ProductModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "categories.id",
          to: "products.categoryId"
        }
      }
    }
  }
}

export default CategoryModel
