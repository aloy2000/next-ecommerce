import { Form, Formik } from "formik"
import FormField from "@/components/ui/FormField.jsx"
import SelectField from "@/components/ui/SelectField"
import Button from "@/components/ui/Button.jsx"
import * as yup from "yup"
import {
  nameValidator,
  addressValidator,
  townValidator,
  regionValidator,
  postalCodeValidator,
  phoneNumberValidator,
} from "@/validators.js"

const optionDelivery = [
  { value: "house", label: "Maison" },
  { value: "relay", label: "Point relai" },
]
const defaultInitialValues = {
  select: "Maison",
  firstName: "",
  familyName: "",
  address: "",
  address2: "",
  town: "",
  region: "",
  postalCode: "",
  phoneNumber: "",
}

const defaultValidationSchema = yup.object().shape({
  firstName: nameValidator.required(),
  familyName: nameValidator.required(),
  address: addressValidator.required(),
  address2: addressValidator,
  town: townValidator.required(),
  region: regionValidator.required(),
  postalCode: postalCodeValidator.required(),
  phoneNumber: phoneNumberValidator.required(),
})
const FormDelivery = (props) => {
  const {
    onSubmit,
    initialValues = defaultInitialValues,
    validationSchema = defaultValidationSchema,
  } = props

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <h1 className="flex font-bold text-4xl pb-3 mt-6 pl-10">Livraison</h1>
        <div className="mx-10">
          <SelectField
            className="flex border rounded-lg bg-white h-9 mt-2 text-center"
            defaultValue={initialValues.select}
            name="deliveryOption"
            label="Option de livraison"
            type="select"
            options={optionDelivery}
          />
        </div>
        <div className=" px-[20%] mr-[25%]">
          <FormField defaultValue="" name="firstName" label="Prénom*" />
          <FormField defaultValue="" name="familyName" label="Nom*" />
          <FormField defaultValue="" name="address" label="Adresse 1*" />
          <FormField defaultValue="" name="address2" label="Adresse 2" />
          <FormField defaultValue="" name="town" label="Ville*" />
          <FormField defaultValue="" name="region" label="Région*" />
          <FormField defaultValue="" name="postalCode" label="Code postal*" />
          <FormField
            defaultValue=""
            name="phoneNumber"
            label="Numéro de téléphone mobile*"
          />
        </div>

        <div className="text-right mr-5">
          <Button
            className=" font-bold bg-blue-600 text-white rounded-lg h-10 w-40 mt-4"
            type="submit"
          >
            Passer au Paiement
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormDelivery
