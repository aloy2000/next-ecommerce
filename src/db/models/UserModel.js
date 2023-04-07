import BaseModel from "@/api/db/models/BaseModel"
import AddressModel from "@/api/db/models/AddressModel"
import CartModel from "@/api/db/models/CartModel"

class UserModel extends BaseModel {
  static get tableName() {
    return "users"
  }

  static get relationMappings() {
    return {
      address: {
        modelClass: AddressModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "users.id",
          to: "address.userId"
        }
      },
      cart: {
        modelClass: CartModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "users.id",
          to: "carts.userId"
        }
      }
    }
  }
}

export default UserModel
