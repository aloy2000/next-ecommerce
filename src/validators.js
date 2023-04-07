import * as yup from "yup"

export const idValidator = yup.number().integer().min(1)

export const nameValidator = yup.string().label("name")

export const addressValidator = yup.string().label("adress")

export const townValidator = yup.string().label("town")

export const regionValidator = yup.string().label("region")

export const postalCodeValidator = yup
  .number("A postal must be numbers")
  .positive("A postal code can't start with a minus")
  .integer("A postal code can't include a decimal point")
  .min(3, "A code postal must include at least 3 numbers")
  .max(5, "A postal code can't include more that 5 numbers")
  .label("postalCode")

export const phoneNumberValidator = yup
  .number("Phone number must be numbers")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8, "A phone number must include 8 numbers")
  .label("phoneNumber")

export const CountrieValidator = yup.string().label("countrie")

export const subjectValidator = yup.string().label("subject")

export const emailValidator = yup.string().email().label("email")

export const messageValidator = yup.string().label("message")

export const passwordValidator = yup
  .string()
  .matches(
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  )

export const confirmPasswordValidator = yup
  .string()
  .oneOf([yup.ref("password"), null], "Passwords must match")

export const paymentValidator = yup.string().label("payment")

export const dateValidator = yup
  .date()
  .typeError("please enter a valid date")
  .min("1969-11-13", "Date is too early")

export const cvvValidator = yup.string().min(3).max(3).label("CVV")

export const cardNumberValidator = yup
  .string()
  .min(16)
  .max(16)
  .label("Numéro de carte bleu")
