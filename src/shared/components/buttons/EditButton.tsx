import React from "react";
import { ButtonProps } from "react-bootstrap";
import ActionButton from "./ActionButton";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
interface IProps extends ButtonProps {
    tooltip?: string;
}

const EditButton: React.FC<IProps> = (props) => {
    return <ActionButton {...props} icon={faEdit} variant="outline-secondary" />;
};

export default EditButton;
