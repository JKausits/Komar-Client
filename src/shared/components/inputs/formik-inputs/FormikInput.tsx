import { useField } from 'formik'
import React from 'react'
import { FormControlProps } from 'react-bootstrap'
import Input from '../Input';

interface IProps extends FormControlProps {
    name: string;
    label?: string;
}

const FormikInput: React.FC<IProps> = ({ label, ...props }) => {
    //#region State
    const [field, meta] = useField(props);
    //#endregion

    return (
        <Input label={label} {...field} {...props} error={meta.error} />
    )
}

export default FormikInput
