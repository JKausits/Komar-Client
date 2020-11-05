import { useField } from 'formik'
import React from 'react'
import { FormControlProps } from 'react-bootstrap'
import CurrencyInput from '../CurrencyInput';

interface IProps extends FormControlProps {
    name: string;
    label?: string;
}

const FormikCurrencyInput: React.FC<IProps> = ({ label, ...props }) => {
    //#region State
    const [field, meta] = useField(props);
    //#endregion

    return (
        <CurrencyInput label={label} {...field} {...props} error={meta.touched ? meta.error : ''} />
    )
}

export default FormikCurrencyInput
