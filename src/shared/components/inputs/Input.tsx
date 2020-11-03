import React from "react";
import { Form, FormControlProps } from "react-bootstrap";

interface IProps extends FormControlProps {
    error?: string;
    label?: string;
}

const Input: React.FC<IProps> = ({ error, label, ...props }) => {
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control {...props} isInvalid={!!error} />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
    );
};

export default Input;
