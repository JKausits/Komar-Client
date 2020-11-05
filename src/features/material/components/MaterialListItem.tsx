import React from 'react'
import CurrencyLabel from '../../../shared/components/labels/CurrencyLabel'
import MaterialListDto from '../../../shared/dtos/material/MaterialList.dto'

interface IProps {
    material: MaterialListDto;
    actions: React.ReactNode;
}

const MaterialListItem: React.FC<IProps> = ({ material, actions }) => {
    return (
        <tr>
            <td>{material.name}</td>
            <td>{material.category.name}</td>
            <td>{material.brand.name}</td>
            <td>{material.size}</td>
            <td>{material.modelNumber}</td>
            <td><CurrencyLabel value={material.salePrice} /></td>
            <td>{actions}</td>
        </tr>
    )
}

export default MaterialListItem
