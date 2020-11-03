import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CategoryDto from '../../../shared/dtos/category/Category.dto'
import CategoryListItem from './CategoryListItem'

interface IProps {
    categories: CategoryDto[];
    actions: (category: CategoryDto) => React.ReactNode;
}

const CategoryList: React.FC<IProps> = ({ categories, actions }) => {
    return (
        <ListGroup>
            {categories.map(category => <CategoryListItem category={category} actions={actions} key={category.id} />)}
        </ListGroup>
    )
}

export default CategoryList
