import { useField } from 'formik'
import React from 'react'
import { FormControlProps } from 'react-bootstrap'
import PercentageInput from '../PercentageInput';

interface IProps extends FormControlProps {
    name: string;
    label?: string;
}

const FormikPercentageInput: React.FC<IProps> = ({ label, ...props }) => {
    //#region State
    const [field, meta] = useField(props);
    //#endregion

    return (
        <PercentageInput label={label} {...field} {...props} error={meta.touched ? meta.error : ''} />
    )
}

export default FormikPercentageInput
