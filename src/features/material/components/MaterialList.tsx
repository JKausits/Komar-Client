import React from 'react'
import { Table } from 'react-bootstrap'
import MaterialListDto from '../../../shared/dtos/material/MaterialList.dto'
import MaterialListItem from './MaterialListItem'

interface IProps {
    materials: MaterialListDto[];
    actions: (material: MaterialListDto) => React.ReactNode;
}

const MaterialList: React.FC<IProps> = ({ materials, actions }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Size</th>
                    <th>Model #</th>
                    <th>Sale Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {materials.map(material => <MaterialListItem key={material.id} material={material} actions={actions(material)} />)}
            </tbody>
        </Table>
    )
}

export default MaterialList
