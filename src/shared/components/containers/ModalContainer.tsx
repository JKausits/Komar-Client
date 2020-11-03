import React from 'react'
import { observer } from 'mobx-react'
import useModalStore from '../../hooks/useModalStore'
import { Modal } from 'react-bootstrap';

const ModalContainer = () => {
    //#region State
    const modalStore = useModalStore();
    const { state } = modalStore;
    const { close } = modalStore;
    //#endregion

    return (
        <Modal
            size={state.size}
            show={state.isOpen}
            onHide={() => close()}
        >
            {state.content}
        </Modal>
    )
}

export default observer(ModalContainer)
