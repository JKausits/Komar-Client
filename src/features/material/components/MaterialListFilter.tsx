import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import FormikInput from '../../../shared/components/inputs/formik-inputs/FormikInput';
import FormikSelect from '../../../shared/components/inputs/formik-inputs/FormikSelect';
import BrandDto from '../../../shared/dtos/brand/Brand.dto';
import CategoryDto from '../../../shared/dtos/category/Category.dto';
import useBrands from '../../../shared/hooks/useBrands';
import useCategories from '../../../shared/hooks/useCategories'

interface IProps {
    onSearch: (values: { categoryId?: string, brandId?: string, term?: string }) => void;
}

const MaterialListFilter: React.FC<IProps> = ({ onSearch }) => {
    //#region State
    const { categories, loadCategories } = useCategories();
    const { brands, loadBrands } = useBrands();
    //#endregion

    //#region Effects
    useEffect(() => {
        loadBrands();
    }, [loadBrands])

    useEffect(() => {
        loadCategories();
    }, [loadCategories])
    //#endregion
    return (
        <Formik initialValues={{ categoryId: '', brandId: '', term: '' }} onSubmit={onSearch}>
            {props => <Row>
                <Col md={3}>
                    <FormikSelect name='categoryId' options={categories.map(CategoryDto.toOption)} selectText='Category' />
                </Col>
                <Col md={3}>
                    <FormikSelect name='brandId' options={brands.map(BrandDto.toOption)} selectText='Brand' />
                </Col>
                <Col md={3}>
                    <FormikInput name='term' placeholder='Term' />
                </Col>
                <Col>
                    <Button variant='primary' onClick={props.submitForm}>Search</Button>
                </Col>
            </Row>}
        </Formik>
    )
}

export default MaterialListFilter
