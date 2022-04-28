import styles from '../styles/Input.module.css'
import { useField } from 'formik'

const InputText = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={styles.container}>
            <label htmlFor={props.id}>{label}</label>
            <input type="text" {...field} {...props} />
            <div><span>{meta.touched && meta.error ? `* ${meta.error}` : null}</span></div>
        </div>
    )
}

export default InputText