import FormField from "../ui/FormField"
import Button from "../ui/Button"
import { Formik, Form } from "formik"
import * as yup from "yup"
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  postalCodeValidator,
  addressValidator,
  townValidator,
  CountrieValidator,
  regionValidator,
  phoneNumberValidator,
} from "@/validators"

const defaultValidationSchema = yup.object().shape({
  familyName: nameValidator.required(),
  firstName: nameValidator.required(),
  email: emailValidator.required(),
  tel: phoneNumberValidator.required(),
  password: passwordValidator.required(),
  postalCode: postalCodeValidator.required(),
  town: townValidator.required(),
  countrie: CountrieValidator.required(),
  region: regionValidator.required(),
  address_1: addressValidator.required(),
  address_2: addressValidator,
})

const defaultInitialValues = {
  familyName: "",
  firstName: "",
  email: "",
  tel: "",
  password: "",
  postalCode: "",
  town: "",
  countrie: "",
  region: "",
  address_1: "",
  address_2: "",
}

const EditAccount = (props) => {
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
        <FormField name="familyName" label="Nom" />
        <FormField name="firstName" label="Prénom" />
        <FormField name="email" type="email" label="E mail" />
        <FormField name="tel" type="tel" label="Téléphone" />
        <FormField name="address_1" type="text" label="Adresse 1" />
        <FormField name="address_2" type="text" label="Adresse 2" />
        <FormField name="postalCode" type="text" label="Code postal" />
        <FormField name="town" type="text" label="Ville" />
        <FormField name="region" type="text" label="Région" />
        <FormField name="countrie" type="text" label="Pays" />
        <FormField name="password" type="password" label="Mot de passe" />
        <Button type="submit" className="mt-8">
          Je sauvegarde
        </Button>
      </Form>
    </Formik>
  )
}

export default EditAccount
