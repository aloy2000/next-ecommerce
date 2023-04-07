import BaseModel from "./BaseModel.js"
import ProductModel from "./ProductModel.js"

class MaterialModel extends BaseModel {
  static get tableName() {
    return "materials"
  }

  static get relationMappings() {
    return {
      product: {
        relation: BaseModel.HasManyRelation,
        modelClass: ProductModel,
        join: {
          from: "materials.id",
          to: "products.materialId"
        }
      }
    }
  }
}

export default MaterialModel
