import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'
import useModalStore from '../../hooks/useModalStore'

interface IProps {
    prompt: React.ReactNode,
    onConfirm: () => Promise<void>;
}

const ConfirmDeleteModal: React.FC<IProps> = ({ prompt, onConfirm }) => {
    //#region State
    const modalStore = useModalStore();
    //#endregion
    return (
        <Fragment>
            <Modal.Header>Confirm Delete</Modal.Header>
            <Modal.Body>
                {prompt}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={onConfirm}>Confirm</Button>
                <Button variant='secondary' onClick={modalStore.close}>Cancel</Button>
            </Modal.Footer>
        </Fragment>
    )
}

export default ConfirmDeleteModal
