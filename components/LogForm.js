import styles from '../styles/LogForm.module.css'
import { Form, Formik } from 'formik'
import InputText from '../components/InputText'
import Button from '../components/Button'

const LogForm = () => {
  return (
    <section className={styles.logSection}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <InputText
            name="email"
            id="email"
            label="Correo electrónico"
            placeholder="Correo"
          />
          <InputText
            name="password"
            id="password"
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
          />
          <Button>Ingresar</Button>
        </Form>
      </Formik>
    </section>
  )
}

export default LogForm