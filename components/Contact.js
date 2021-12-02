import styles from '../styles/Contact.module.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputText from './InputText'
import Button from './Button'

const Contact = ({ trans }) => {
    const { title, inputs, button } = trans
    return (
        <section id="contact" className={styles.contact}>
            <h2>{title}</h2>
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
                        .min(4, 'Too short message')
                        .required('Required')
                })}
                onSubmit={values => console.log(values)}
            >
                <Form>
                    <InputText label={inputs.firstname.label} name="firstName" />
                    <InputText label={inputs.lastname.label} name="lastName" />
                    <InputText label={inputs.email.label} name="email" />
                    <InputText label={inputs.message.label} name="message" />
                    <Button type="submit">{button}</Button>
                </Form>
            </Formik>
        </section>
    )
}

export default Contact