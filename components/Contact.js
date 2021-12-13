import styles from '../styles/Contact.module.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputText from './InputText'
import InputArea from './InputArea'
import Button from './Button'
import { FaEnvelopeOpenText } from 'react-icons/fa'

const Contact = ({ trans }) => {
    const { title, subtitle, inputs, errors, button } = trans
    return (
        <section id="contact" className={styles.contact}>
            <h2>{title}</h2>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, errors.min3)
                        .max(15, errors.max15)
                        .required(errors.required),
                    email: Yup.string()
                        .email(errors.email)
                        .required(errors.required),
                    message: Yup.string()
                        .min(4, errors.min4)
                        .required(errors.required)
                })}
                onSubmit={values => console.log(values)}
            >
                <Form>
                    <InputText
                        name="name"
                        id="name"
                        label={inputs.name.label}
                        placeholder={inputs.name.placeholder}
                    />
                    <InputText
                        name="email"
                        id="email"
                        label={inputs.email.label}
                        placeholder={inputs.email.placeholder}
                    />
                    <InputArea
                        name="message"
                        id="message"
                        label={inputs.message.label}
                        placeholder={inputs.message.placeholder}
                    />
                    <Button type="submit">{button}</Button>
                </Form>
            </Formik>
            <div className={styles.container}>
                <FaEnvelopeOpenText />
                <div className={styles.message}>
                    <p>{subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default Contact