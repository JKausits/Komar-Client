import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CategoryDto from '../../../shared/dtos/category/Category.dto'

interface IProps {
    category: CategoryDto;
    actions: (category: CategoryDto) => React.ReactNode;
}

const CategoryListItem: React.FC<IProps> = ({ category, actions }) => {
    return (
        <ListGroup.Item className='d-flex'>
            <h4>{category.name}</h4>
            <div className="ml-auto">{actions(category)}</div>
        </ListGroup.Item>
    )
}

export default CategoryListItem
