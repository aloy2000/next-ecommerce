import FormField from "../ui/FormField"
import Button from "../ui/Button"
import { Formik, Form } from "formik"
import * as yup from "yup"
import {
  paymentValidator,
  nameValidator,
  dateValidator,
  cvvValidator,
  cardNumberValidator,
} from "@/validators"

const defaultValidationSchema = yup.object().shape({
  payment: paymentValidator.required(),
  name: nameValidator.required(),
  date: dateValidator.required(),
  CVV: cvvValidator.required(),
  card_number: cardNumberValidator.required(),
})

const defaultInitialValues = {
  payment: "",
  name: "",
  date: "",
  CVV: "",
  card_number: "",
}

const Transaction = (props) => {
  const {
    onSubmit,
    initialValues = defaultInitialValues,
    validationSchema = defaultValidationSchema,
  } = props

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormField name="payment" label="Paiement" />
        <FormField name="card_number" label="Numéro de carte" />
        <FormField name="name" label="Nom complet" />
        <FormField name="date" label="Date d'expiration" />
        <FormField name="CVV" label="CVV" />
      </Form>
    </Formik>
  )
}

export default Transaction
