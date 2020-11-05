import { useField } from 'formik'
import React from 'react'
import { FormControlProps } from 'react-bootstrap'
import TextArea from '../TextArea';

interface IProps extends FormControlProps {
    name: string;
    rows?: number;
    label?: string;
}

const FormikTextArea: React.FC<IProps> = ({ label, ...props }) => {
    //#region State
    const [field, meta] = useField(props);
    //#endregion

    return (
        <TextArea label={label} {...field} {...props} error={meta.touched ? meta.error : ''} />
    )
}

export default FormikTextArea
