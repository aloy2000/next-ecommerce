import FormField from "../ui/FormField"
import Button from "../ui/Button"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { emailValidator, passwordValidator } from "@/validators"

const defaultValidationSchema = yup.object().shape({
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const defaultInitialValues = {
  email: "",
  password: "",
}

const FormSignIn = (props) => {
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
        <FormField name="email" label="Email" />
        <FormField type="password" name="password" label="Password" />
        <Button
          className="bg-gray-100 text-black rounded m-8 py-2 px-4 border-b-4 border-slay-100 hover:border-black"
          type="submit"
        >
          Se connecter
        </Button>
      </Form>
    </Formik>
  )
}

export default FormSignIn
