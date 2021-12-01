import { useField } from 'formik'

const InputText = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="text" {...field} {...props} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default InputText