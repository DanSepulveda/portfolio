import styles from '../styles/Contact.module.css'
import axios from 'axios'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { H1 } from './Headings'
import Alert from './Alert'
import Comment from './Comment'
import InputText from './InputText'
import InputArea from './InputArea'
import Button from './Button'
import { useRouter } from 'next/router'

const Contact = ({ trans }) => {
    const { title, subtitle, inputs, errors, button, alertMessages } = trans
    const { locale } = useRouter()

    const sendMail = async (values) => {
        const boton = document.getElementById('send')
        boton.innerText = alertMessages.saving.title
        try {
            boton.setAttribute('disabled', true)
            const response = await axios.post('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/sendMail', values)
            if (!response.data.success) throw new Error()
            toast(() => <Alert message={alertMessages.success} type='success' />)
            boton.removeAttribute('disabled')
            boton.innerText = button
            return true
        } catch (error) {
            toast(() => <Alert message={alertMessages.error} type='error' />)
            boton.removeAttribute('disabled')
            boton.innerText = button
            return false
        }
    }

    return (
        <section className={styles.contact}>
            <Toaster position='bottom-left' />
            <H1>{title}</H1>
            <Formik
                initialValues={{ name: '', email: '', message: '', language: locale }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, errors.min3)
                        .max(30, errors.max30)
                        .required(errors.required),
                    email: Yup.string()
                        .email(errors.email)
                        .required(errors.required),
                    message: Yup.string()
                        .min(4, errors.min4)
                        .required(errors.required)
                })}
                onSubmit={async (values, { resetForm }) => {
                    const response = await sendMail(values)
                    if (response) {
                        resetForm({ name: '', email: '', message: '', language: locale })
                    }
                }}
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
                    <input type="hidden" name="language" />
                    <Button type="submit" id='send'>{button}</Button>
                </Form>
            </Formik>
            <div className={styles.container}>
                <FaEnvelopeOpenText />
                <div className={styles.message}>
                    <Comment>{subtitle}</Comment>
                </div>
            </div>
        </section>
    )
}

export default Contact