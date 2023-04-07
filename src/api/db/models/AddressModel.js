import BaseModel from "@/api/db/models/BaseModel"
import UserModel from "@/api/db/models/UserModel"

class AddressModel extends BaseModel {
  static get tableName() {
    return "address"
  }

  static get relationMappings() {
    return {
      user: {
        modelClass: UserModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "address.userId",
          to: "users.id"
        }
      }
    }
  }
}

export default AddressModel
