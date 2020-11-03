import React, { Fragment } from "react";
import useRequestStore from "../../hooks/useRequestStore";
import { Spinner } from "react-bootstrap";
import { observer } from "mobx-react";

const RequestSpinnerContainer = () => {
    //#region State
    const requestStore = useRequestStore();
    //#endregion

    if (requestStore.requests.length === 0) return <Fragment></Fragment>;

    return (
        <div
            className="d-flex flex-column"
            style={{
                width: "100vw",
                height: "100vh",
                zIndex: 1200,
                backgroundColor: "#00000088",
                position: "absolute",
                top: 0,
                left: 0,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Spinner
                animation="border"
                style={{ width: "6rem", height: "6rem" }}
                variant="light"
            />
            <p style={{ fontSize: "3rem", color: "white" }}>
                {requestStore.requests[0]}
            </p>
        </div>
    );
};

export default observer(RequestSpinnerContainer);
