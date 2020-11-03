import React from 'react'
import { ListGroup } from 'react-bootstrap'
import BrandDto from '../../../shared/dtos/brand/Brand.dto'

interface IProps {
    brand: BrandDto;
    actions: (brand: BrandDto) => React.ReactNode;
}

const BrandListItem: React.FC<IProps> = ({ brand, actions }) => {
    return (
        <ListGroup.Item className='d-flex'>
            <h4>{brand.name}</h4>
            <div className="ml-auto">{actions(brand)}</div>
        </ListGroup.Item>
    )
}

export default BrandListItem
