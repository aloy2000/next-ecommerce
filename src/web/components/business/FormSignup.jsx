import FormField from "../ui/FormField"
import Button from "../ui/Button"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { passwordValidator, emailValidator, nameValidator } from "@/validators"

const defaultValidationSchema = yup.object().shape({
  familyName: nameValidator.required(),
  firstName: nameValidator.required(),
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const defaultInitialValues = {
  familyName: "",
  firstName: "",
  email: "",
  password: "",
}

const FormSignUp = (props) => {
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
        <FormField name="password" type="password" label="Mot de passe" />
        <Button>
          Je m'inscris
        </Button>
      </Form>
    </Formik>
  )
}

export default FormSignUp
