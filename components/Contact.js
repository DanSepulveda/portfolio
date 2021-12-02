import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputText from './InputText'
import Button from './Button'

const Contact = ({ trans }) => {
    const { labels } = trans
    return (
        <section>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    message: Yup.string()
                        .min(10, 'Too short message')
                        .required('Required')
                })}
                onSubmit={values => console.log(values)}
            >
                <Form>
                    <InputText label={labels.firstname} name="firstName" />
                    <InputText label={labels.lastname} name="lastName" />
                    <InputText label={labels.email} name="email" />
                    <InputText label={labels.message} name="message" />
                    <Button type="submit">Enviar</Button>
                </Form>
            </Formik>
        </section>
    )
}

export default Contact