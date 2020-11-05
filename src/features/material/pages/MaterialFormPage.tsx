import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import BackButton from '../../../shared/components/buttons/BackButton';
import MaterialFormDto from '../../../shared/dtos/material/MaterialForm.dto';
import useBrands from '../../../shared/hooks/useBrands';
import useCategories from '../../../shared/hooks/useCategories'
import useMaterial from '../../../shared/hooks/useMaterial';
import useMaterials from '../../../shared/hooks/useMaterials';
import MaterialForm from '../components/MaterialForm';

const MaterialFormPage = () => {
    //#region State
    const { categories, loadCategories, createCategory } = useCategories();
    const { brands, loadBrands, createBrand } = useBrands();
    const { createMaterial } = useMaterials();
    const { material, updateMaterial, loadMaterialFromParams } = useMaterial();
    //#endregion

    //#region Handlers
    const handleSubmit = async (dto: MaterialFormDto, reset: () => void) => {
        material ? await updateMaterial(dto) : await createMaterial(dto);
        reset();
    }
    //#endregion

    //#region Effects
    useEffect(() => {
        loadBrands();
    }, [loadBrands])

    useEffect(() => {
        loadCategories();
    }, [loadCategories])

    useEffect(() => {
        loadMaterialFromParams();
    }, [loadMaterialFromParams])
    //#endregion
    return (
        <div>
            <div className="d-flex justify-content-end my-2">
                <BackButton />
            </div>
            <Card>
                <Card.Header>{material ? 'Edit' : 'Create'} Material</Card.Header>
                <Card.Body>
                    <MaterialForm material={material} categories={categories} brands={brands} onSubmit={handleSubmit} onCreateBrand={createBrand} onCreateCategory={createCategory} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default MaterialFormPage
