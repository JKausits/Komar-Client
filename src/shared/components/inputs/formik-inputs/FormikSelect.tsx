import { useField } from 'formik'
import React from 'react'
import { FormControlProps } from 'react-bootstrap'
import OptionDto from '../../../dtos/Option.dto';
import Select from '../Select';

interface IProps extends FormControlProps {
    name: string;
    options: OptionDto[];
    label?: string;
    onAddClicked?: () => void;
    onAddTooltip?: string;
    selectText?: string;
}

const FormikSelect: React.FC<IProps> = ({ label, ...props }) => {
    //#region State
    const [field, meta] = useField(props);
    //#endregion

    return (
        <Select label={label} {...field} {...props} error={meta.touched ? meta.error : ''} />
    )
}

export default FormikSelect
