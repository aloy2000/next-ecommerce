import FormField from "../ui/FormField"
import Button from "../ui/Button"
import { Formik, Form } from "formik"
import * as yup from "yup"
import {
  subjectValidator,
  emailValidator,
  messageValidator,
} from "@/validators.js"

const defaultInitialValues = {
  subject: "",
  email: "",
  message: "",
}

const defaultValidationSchema = yup.object().shape({
  subject: subjectValidator.required(),
  email: emailValidator.required(),
  message: messageValidator.required(),
})

const FormCommunication = (props) => {
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
        <FormField name="subject" label="Sujet" />
        <FormField name="email" label="Email" />
        <FormField name="message" label="Message" />
        <Button
          className="bg-gray-100 text-black rounded m-8 py-2 px-4 border-b-4 border-slay-100 hover:border-black"
          type="submit"
        >
          Envoyer
        </Button>
      </Form>
    </Formik>
  )
}
export default FormCommunication
