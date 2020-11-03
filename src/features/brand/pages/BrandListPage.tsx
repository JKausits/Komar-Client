import React, { Fragment, useEffect } from 'react'
import AddButton from '../../../shared/components/buttons/AddButton';
import DeleteButton from '../../../shared/components/buttons/DeleteButton';
import EditButton from '../../../shared/components/buttons/EditButton';
import ConfirmDeleteModal from '../../../shared/components/modals/ConfirmDeleteModal';
import BrandDto from '../../../shared/dtos/brand/Brand.dto';
import BrandFormDto from '../../../shared/dtos/brand/BrandForm.dto';
import useBrands from '../../../shared/hooks/useBrands';
import useModalStore from '../../../shared/hooks/useModalStore';
import BrandFormModal from '../components/BrandFormModal';
import BrandList from '../components/BrandList';

const BrandListPage = () => {
    //#region State
    const { brands, loadBrands, createBrand, updateBrand, deleteBrand } = useBrands();
    const modalStore = useModalStore();
    //#endregion

    //#region Handlers
    const handleUpsertBrandClicked = (Brand?: BrandDto) => {
        modalStore.open(<BrandFormModal brand={Brand} onSubmit={async (dto: BrandFormDto) => {
            Brand ? await updateBrand(Brand.id, dto) : await createBrand(dto);
            modalStore.close();
        }} />)
    }

    const handleDeleteBrandClicked = (brand: BrandDto) => {
        modalStore.open(<ConfirmDeleteModal prompt={`Are you sure you want to delete ${brand.name}?`} onConfirm={async () => {
            await deleteBrand(brand.id);
            modalStore.close();
        }} />)
    }
    //#endregion

    //#region UI Helpers
    const actions = (brand: BrandDto) => {
        return <Fragment>
            <EditButton className='mr-1' tooltip='Edit Brand' onClick={() => handleUpsertBrandClicked(brand)} />
            <DeleteButton tooltip='Delete Brand' onClick={() => handleDeleteBrandClicked(brand)} />
        </Fragment>
    }
    //#endregion

    //#region Effects
    useEffect(() => {
        loadBrands();
    }, [loadBrands])
    //#endregion
    return (
        <div className="d-flex flex-column">
            <div className="d-flex my-2">
                <h3>Brands</h3>
                <AddButton className='ml-auto' tooltip='Create Brand' onClick={() => handleUpsertBrandClicked()} />
            </div>
            <BrandList brands={brands} actions={actions} />
            {brands.length === 0 && 'No Brands Created'}
        </div>
    )
}

export default BrandListPage
