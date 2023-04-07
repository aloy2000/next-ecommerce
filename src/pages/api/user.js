import mw from "@/api/mw.js"
import validate from "@/api/middlewares/validate.js"
import { emailValidator, idValidator } from "@/validators.js"
import bcrypt from 'bcrypt';
import UserModel from "@/db/models/UserModel";
import AddressModel from "@/api/db/models/AddressModel";

const handler = mw({
    POST: [
        validate({
            body: {
                userId: idValidator.required(),
                email: emailValidator.required(),
            },
        }),
        async ({
            locals: {
                body: { userId, email, name, firstName, postal, city, adresse, newPassword },
            },
            res,
        }) => {
            try {
                let user = await UserModel.query().findOne({ id: userId })
                let userAdresse = await AddressModel.query().findOne({ userId })
                

                if (user) {
                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(newPassword, salt)
                    await user.$query().patch({ firstName, familyName: name, email: email, password: hashedPassword, salt })

                }
                if (!user) {
                    return res.status(400).send({
                        message: "User not found"
                    })
                }

                if (userAdresse) {
                    await userAdresse.$query().patch({ postalCode: postal, town: city, street: adresse, country: "France" })
                }
                if(!userAdresse) {
                    await AddressModel.query().insert({ postalCode: postal, town: city, street: adresse, country: "France", userId: userId })
                }

                return res.status(200).send({
                    result: "Done"
                })

            } catch (err) {
                const error = err.response?.data?.error || "Oops. Something went wrong"

                return [Array.isArray(error) ? error : [error]]
            }
        },
    ]



})

export default handler
