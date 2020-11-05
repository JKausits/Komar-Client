import React from "react";
import { Form, FormControlProps, InputGroup } from "react-bootstrap";

interface IProps extends FormControlProps {
    error?: string;
    name: string;
    label?: string;
}

const PercentageInput: React.FC<IProps> = ({
    error,
    name,
    label,
    ...props
}) => {
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <InputGroup>
                <Form.Control name={name} {...props} isInvalid={!!error} />
                <InputGroup.Append>
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    );
};

export default PercentageInput;
