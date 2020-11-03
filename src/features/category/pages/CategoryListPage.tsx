import React, { Fragment, useEffect } from 'react'
import AddButton from '../../../shared/components/buttons/AddButton';
import DeleteButton from '../../../shared/components/buttons/DeleteButton';
import EditButton from '../../../shared/components/buttons/EditButton';
import ConfirmDeleteModal from '../../../shared/components/modals/ConfirmDeleteModal';
import CategoryDto from '../../../shared/dtos/category/Category.dto';
import CategoryFormDto from '../../../shared/dtos/category/CategoryForm.dto';
import useCategories from '../../../shared/hooks/useCategories'
import useModalStore from '../../../shared/hooks/useModalStore';
import CategoryFormModal from '../components/CategoryFormModal';
import CategoryList from '../components/CategoryList';

const CategoryListPage = () => {
    //#region State
    const { categories, loadCategories, createCategory, updateCategory, deleteCategory } = useCategories();
    const modalStore = useModalStore();
    //#endregion

    //#region Handlers
    const handleUpsertCategoryClicked = (category?: CategoryDto) => {
        modalStore.open(<CategoryFormModal category={category} onSubmit={async (dto: CategoryFormDto) => {
            category ? await updateCategory(category.id, dto) : await createCategory(dto);
            modalStore.close();
        }} />)
    }

    const handleDeleteCategoryClicked = (category: CategoryDto) => {
        modalStore.open(<ConfirmDeleteModal prompt={`Are you sure you want to delete ${category.name}?`} onConfirm={async () => {
            await deleteCategory(category.id);
            modalStore.close();
        }} />)
    }
    //#endregion

    //#region UI Helpers
    const actions = (category: CategoryDto) => {
        return <Fragment>
            <EditButton className='mr-1' tooltip='Edit Category' onClick={() => handleUpsertCategoryClicked(category)} />
            <DeleteButton tooltip='Delete Category' onClick={() => handleDeleteCategoryClicked(category)} />
        </Fragment>
    }
    //#endregion

    //#region Effects
    useEffect(() => {
        loadCategories();
    }, [loadCategories])
    //#endregion
    return (
        <div className="d-flex flex-column">
            <div className="d-flex my-2">
                <h3>Categories</h3>
                <AddButton className='ml-auto' tooltip='Create Category' onClick={() => handleUpsertCategoryClicked()} />
            </div>
            <CategoryList categories={categories} actions={actions} />
        </div>
    )
}

export default CategoryListPage
