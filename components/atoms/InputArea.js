import styles from '../../styles/Input.module.css'
import { useField } from 'formik'

const InputArea = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={styles.container}>
            <label htmlFor={props.id}>{label}</label>
            <textarea cols="30" rows={4} {...field} {...props}></textarea>
            <div><span>{meta.touched && meta.error ? `* ${meta.error}` : null}</span></div>
        </div>
    )
}

export default InputArea