import styles from '../styles/Contact.module.css'
import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import H2 from './H2'
import Comment from './Comment'
import InputText from './InputText'
import InputArea from './InputArea'
import Button from './Button'
import Alert from './Alert'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

const Contact = ({ trans }) => {
    const { title, subtitle, inputs, errors, button, alertMessages } = trans

    const sendMail = async (values) => {
        const boton = document.getElementById('send')
        try {
            boton.setAttribute('disabled', true)
            // const response = await axios.post('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/sendMail', { values })
            // if (!response.data.success) throw new Error()
            toast(() => <Alert message={alertMessages.success} type='success' />)
            boton.removeAttribute('disabled')
            return true
        } catch (error) {
            toast(() => <Alert message={alertMessages.error} type='error' />)
            boton.removeAttribute('disabled')
            return false
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <Toaster position='bottom-left' />
            <H2>{title}</H2>
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
                onSubmit={async (values, { resetForm }) => {
                    const response = await sendMail(values)
                    if (response) {
                        resetForm({ name: '', email: '', message: '' })
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