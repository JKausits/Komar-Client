import React from "react";
import { useHistory } from "react-router-dom";
import { Button, ButtonProps } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton: React.FC<ButtonProps> = (props) => {
    //#region State
    const history = useHistory();
    //#endregion

    return (
        <Button
            variant="outline-primary"
            onClick={() => history.goBack()}
            {...props}
        >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back
        </Button>
    );
};

export default BackButton;
