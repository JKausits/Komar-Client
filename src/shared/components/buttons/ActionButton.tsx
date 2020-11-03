import React from "react";
import { ButtonProps, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface IProps extends ButtonProps {
    tooltip?: string;
    icon: IconProp;
}

const ActionButton: React.FC<IProps> = ({ tooltip, icon, ...props }) => {
    const button = (
        <Button {...props}>
            <FontAwesomeIcon icon={icon} />
        </Button>
    );

    if (!tooltip) return button;

    return (
        <OverlayTrigger overlay={<Tooltip id="action-tool-tip">{tooltip}</Tooltip>}>
            {button}
        </OverlayTrigger>
    );
};

export default ActionButton;
