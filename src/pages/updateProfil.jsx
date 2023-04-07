import { ProfilForm } from "@/web/components/business/ProfilForm"


const UpdateProfil = () => {
  const initialValues = {
    name: "",
    firstName: "",
    email: "",
    adresse: "",
    postal: "",
    city: "",
    password: ""
  }

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  return (
    <div>
      <div className="m-16">
        <h1 className="text-3xl flex justify-center font-semibold">Mettre à jour vos profil</h1>
        <div className="flex justify-center">
          <ProfilForm initialValues={initialValues} validationSchema={validate} />
        </div>
      </div>
    </div>
  )
}

export default UpdateProfil
