import React from 'react'
import { ButtonProps } from 'react-bootstrap'
import DeleteButton from '../../../shared/components/buttons/DeleteButton'
import ConfirmDeleteModal from '../../../shared/components/modals/ConfirmDeleteModal'
import MaterialDetailDto from '../../../shared/dtos/material/MaterialDetail.dto'
import MaterialListDto from '../../../shared/dtos/material/MaterialList.dto'
import useModalStore from '../../../shared/hooks/useModalStore'

interface IProps extends ButtonProps {
    material: MaterialListDto | MaterialDetailDto,
    onDeleteConfirm: () => Promise<void>;
}

const DeleteMaterialButton: React.FC<IProps> = ({ material, onDeleteConfirm, ...props }) => {
    //#region State
    const modalStore = useModalStore();
    //#endregion

    //#region Handlers
    const handleDeleteMaterialClicked = () => {
        modalStore.open(<ConfirmDeleteModal prompt={`Are you sure you want to delete ${material.name}?`} onConfirm={async () => {
            await onDeleteConfirm();
            modalStore.close();
        }} />)
    }
    //#endregion

    return (
        <DeleteButton tooltip='Delete Material' onClick={handleDeleteMaterialClicked} />
    )
}

export default DeleteMaterialButton
