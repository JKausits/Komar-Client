import React from "react";
import { ButtonProps } from "react-bootstrap";
import ActionButton from "./ActionButton";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
interface IProps extends ButtonProps {
    tooltip?: string;
}

const DeleteButton: React.FC<IProps> = (props) => {
    return <ActionButton {...props} icon={faTrashAlt} variant="outline-danger" />;
};

export default DeleteButton;
