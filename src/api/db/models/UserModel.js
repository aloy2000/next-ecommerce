import BaseModel from "./BaseModel.js"
import AddressModel from "./AddressModel.js"
import CartModel from "./CartModel.js"

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
          to: "address.userId",
        },
      },
      cart: {
        modelClass: CartModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "users.id",
          to: "carts.userId",
        },
      },
    }
  }
}

export default UserModel
