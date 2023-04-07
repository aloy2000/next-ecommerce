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

const MissedPassword = (props) => {
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
        <FormField name="email" type="email" label="E mail" />
        <FormField
          name="password"
          type="password"
          label="Nouveau mot de passe"
        />
        <Button
          type="submit"
          class="bg-sky-900 hover:bg-sky-800 text-white font-semibold py-2 px-4 border-b-4 border-sky-800 hover:border-sky-700 rounded mx-8 my-8"
        >
          valider
        </Button>
      </Form>
    </Formik>
  )
}

export default MissedPassword
