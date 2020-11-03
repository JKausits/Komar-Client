import React from "react";
import { ButtonProps } from "react-bootstrap";
import ActionButton from "./ActionButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
interface IProps extends ButtonProps {
    tooltip?: string;
}

const AddButton: React.FC<IProps> = (props) => {
    return <ActionButton {...props} icon={faPlus} variant="outline-success" />;
};

export default AddButton;
