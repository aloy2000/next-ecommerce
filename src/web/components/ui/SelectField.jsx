import { useField } from "formik"

const SelectField = ({ label, name, options, ...otherProps }) => {
  const [field, { touched, error }, { setValue }] = useField({ name })

  return (
    <label>
      <span className="font-bold">{label}</span>
      <select
        className="border rounded-lg"
        onChange={(event) => setValue(event.target.value)}
        {...otherProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {touched && error ? (
        <span className="text-sm text-red-600">{error}</span>
      ) : null}
    </label>
  )
}

export default SelectField
