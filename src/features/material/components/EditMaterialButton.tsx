import React from 'react'
import { ButtonProps } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import EditButton from '../../../shared/components/buttons/EditButton'
import MaterialDetailDto from '../../../shared/dtos/material/MaterialDetail.dto'
import MaterialListDto from '../../../shared/dtos/material/MaterialList.dto'

interface IProps extends ButtonProps {
    material: MaterialListDto | MaterialDetailDto
}

const EditMaterialButton: React.FC<IProps> = ({ material, ...props }) => {
    //#region State
    const history = useHistory();
    //#endregion
    return (
        <EditButton tooltip='Edit Material' {...props} onClick={() => history.push(`/material/edit/${material.id}`)} />
    )
}

export default EditMaterialButton
