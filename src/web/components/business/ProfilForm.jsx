import { Form, Formik } from 'formik'
import React from 'react'
import FormField from '../ui/FormField'
import Button from '../ui/Button'
import axios from 'axios'
//{ userId, email, name, firstName, postal, city, adresse, newPassword }

export const ProfilForm = ({ initialValues }) => {

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log("values", values);
        try {
            await axios.post('http://localhost:3000/api/user', {
                userId: 2,
                email: values.email,
                name: values.name,
                firstName: values.lastName,
                postal: values.postal,
                city: values.city,
                adresse: values.adresse,
                newPassword: values.password

            })
            setSubmitting(false)

        } catch (error) {
            console.log("errorrrrr:", error)
        }
    }



    return (
        <Formik
            initialValues={initialValues}
            //validationSchema={validationSchema}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Champ obligatoire';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Champ obligatoire';
                }

                if(!values.postal) {
                    errors.postal = 'Champ obligatoire';
                }
                if(!values.city) {
                    errors.city = 'Champ obligatoire';
                }
                if(!values.adresse) {
                    errors.adresse = 'Champ obligatoire';
                }
                if(!values.name) {
                    errors.name = 'Champ obligatoire';
                }
                if(!values.lastName) {
                    errors.lastName = 'Champ obligatoire';
                }
                
                
                
                

              

                return errors;
            }}
            onSubmit={handleSubmit}

        >
            {(formik) => (
                <Form>
                    <FormField name="name" label="Nom" />
                    <FormField name="lastName" label="Prénom" />
                    <FormField name="email" label="Email" />
                    <FormField name="adresse" label="Adresse" />
                    <FormField name="postal" label="Code Postal" />
                    <FormField name="city" label="Ville" />
                    <FormField name="password" type="password" label="Nouveau password" />
                    <Button
                        className="bg-gray-100 text-black rounded m-8 py-2 px-4 border-b-4 border-slay-100 hover:border-black"
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
