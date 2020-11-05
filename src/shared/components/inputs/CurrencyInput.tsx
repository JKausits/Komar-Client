import React from "react";
import { Form, FormControlProps, InputGroup } from "react-bootstrap";

interface IProps extends FormControlProps {
    error?: string;
    name: string;
    label?: string;
}

const CurrencyInput: React.FC<IProps> = ({ error, name, label, ...props }) => {
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name={name} {...props} isInvalid={!!error} />
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    );
};

export default CurrencyInput;
