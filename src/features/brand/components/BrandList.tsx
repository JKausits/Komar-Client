import React from 'react'
import { ListGroup } from 'react-bootstrap'
import BrandDto from '../../../shared/dtos/brand/Brand.dto'
import BrandListItem from './BrandListItem'

interface IProps {
    brands: BrandDto[];
    actions: (brand: BrandDto) => React.ReactNode;
}

const BrandList: React.FC<IProps> = ({ brands, actions }) => {
    return (
        <ListGroup>
            {brands.map(brand => <BrandListItem brand={brand} actions={actions} key={brand.id} />)}
        </ListGroup>
    )
}

export default BrandList
