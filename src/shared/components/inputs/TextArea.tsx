import React from "react";
import { Form, FormControlProps } from "react-bootstrap";

interface IProps extends FormControlProps {
    error?: string;
    name: string;
    rows?: number;
    label?: string;
}

const TextArea: React.FC<IProps> = ({ error, name, label, ...props }) => {
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control name={name} {...props} isInvalid={!!error} as="textarea" />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
    );
};

export default TextArea;
