import { useFormikContext } from 'formik'
import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap';

interface IProps extends ButtonProps {
    text?: string;
}

const FormikSubmitButton: React.FC<IProps> = ({ text = 'Submit', ...props }) => {
    //#region State
    const context = useFormikContext();
    //#endregion
    return (
        <Button variant='primary' {...props} disabled={!context.dirty || !context.isValid} type='submit' onClick={context.submitForm}>{text}</Button>
    )
}

export default FormikSubmitButton
