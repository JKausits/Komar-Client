import React, { Fragment } from "react";
import { Form, FormControlProps, InputGroup } from "react-bootstrap";
import OptionDto from "../../dtos/Option.dto";
import AddButton from "../buttons/AddButton";

interface IProps extends FormControlProps {
    error?: string;
    name: string;
    options: OptionDto[];
    label?: string;
    onAddClicked?: () => void;
    onAddTooltip?: string;
    selectText?: string;
}

const Select: React.FC<IProps> = ({
    error,
    name,
    label,
    options,
    onAddClicked,
    onAddTooltip,
    selectText,
    ...props
}) => {
    const control = (
        <Form.Control name={name} {...props} isInvalid={!!error} as="select">
            <option value="">Select {selectText || label}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </Form.Control>
    );

    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            {onAddClicked ? (
                <InputGroup>
                    {control}
                    <InputGroup.Append>
                        <AddButton onClick={onAddClicked} tooltip={onAddTooltip} />
                    </InputGroup.Append>
                    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                </InputGroup>
            ) : (
                    <Fragment>
                        {control}
                        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                    </Fragment>
                )}
        </Form.Group>
    );
};

export default Select;
