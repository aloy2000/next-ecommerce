import clsx from "clsx"
import { useField } from "formik"

const FormField = (props) => {
  const { className, label, name, value, placeholder, ...otherProps } = props
  const [field, { touched, error }, { setValue }] = useField({ name })

  return (
    <label className={clsx("flex flex-col gap-2 ml-5 mr-5 pt-5", className)}>
      <span className="text-sm font-bold">{label}</span>
      <input
        className="border rounded-lg shadow appearance-none w-80 py-2 px-2"
        onChange={(event) => setValue(event.target.value)}
        {...otherProps}
        placeholder={placeholder}
        value={value}
      />
      {touched && error ? (
        <span className="text-sm text-red-600">{error}</span>
      ) : null}
    </label>
  )
}

export default FormField
