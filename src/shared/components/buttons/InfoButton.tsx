import React from "react";
import { ButtonProps } from "react-bootstrap";
import ActionButton from "./ActionButton";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
interface IProps extends ButtonProps {
    tooltip?: string;
}

const InfoButton: React.FC<IProps> = (props) => {
    return <ActionButton {...props} icon={faInfoCircle} variant="outline-info" />;
};

export default InfoButton;
