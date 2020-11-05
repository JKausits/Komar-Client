import { Formik } from 'formik'
import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import FormikCurrencyInput from '../../../shared/components/inputs/formik-inputs/FormikCurrencyInput'
import FormikInput from '../../../shared/components/inputs/formik-inputs/FormikInput'
import FormikPercentageInput from '../../../shared/components/inputs/formik-inputs/FormikPercentageInput'
import FormikSelect from '../../../shared/components/inputs/formik-inputs/FormikSelect'
import FormikSubmitButton from '../../../shared/components/inputs/formik-inputs/FormikSubmitButton'
import FormikTextArea from '../../../shared/components/inputs/formik-inputs/FormikTextArea'
import BrandDto from '../../../shared/dtos/brand/Brand.dto'
import BrandFormDto from '../../../shared/dtos/brand/BrandForm.dto'
import CategoryDto from '../../../shared/dtos/category/Category.dto'
import CategoryFormDto from '../../../shared/dtos/category/CategoryForm.dto'
import MaterialDetailDto from '../../../shared/dtos/material/MaterialDetail.dto'
import MaterialFormDto from '../../../shared/dtos/material/MaterialForm.dto'
import useModalStore from '../../../shared/hooks/useModalStore'
import BrandFormModal from '../../brand/components/BrandFormModal'
import CategoryFormModal from '../../category/components/CategoryFormModal'
import * as Yup from 'yup';
import { formatMaxCurrency, formatMaxLength, formatMaxPercentage, formatMinCurrency, formatMinPercentage, formatRequired } from '../../../shared/util/error-formatters'

const materialSchema = Yup.object().shape({
    name: Yup.string().required(formatRequired('Name')).max(100, formatMaxLength('Name', 100)),
    description: Yup.string().required(formatRequired('Description')).max(1000, formatMaxLength('Description', 1000)),
    categoryId: Yup.string().required(formatRequired('Category')),
    brandId: Yup.string().required(formatRequired('Brand')),
    modelNumber: Yup.string().max(100, formatMaxLength('Model #', 100)),
    size: Yup.string().max(100, formatMaxLength('Size', 100)),
    price: Yup.number().required().max(999999.99, formatMaxCurrency('Price', 999999.99)).min(0, formatMinCurrency('Price', 0)),
    tax: Yup.number().required().max(999999.99, formatMaxCurrency('Tax', 999999.99)).min(0, formatMinCurrency('Tax', 0)),
    salePrice: Yup.number().required().max(999999.99, formatMaxCurrency('Sale Price', 999999.99)).min(0, formatMinCurrency('Sale Price', 0)),
    markup: Yup.number().required().max(999.99, formatMaxPercentage('Markup', 999999.99)).min(0, formatMinPercentage('Markup', 0)),

})

interface IProps {
    material?: MaterialDetailDto;
    onSubmit: (dto: MaterialFormDto, reset: () => void) => void;
    categories: CategoryDto[];
    brands: BrandDto[];
    onCreateCategory: (dto: CategoryFormDto) => Promise<CategoryDto>;
    onCreateBrand: (dto: BrandFormDto) => Promise<BrandDto>;
}

const MaterialForm: React.FC<IProps> = ({ material, onSubmit, categories, brands, onCreateBrand, onCreateCategory }) => {
    //#region State
    const modalStore = useModalStore();
    //#endregion
    const calculateTax = (price: number) => {
        return price * 0.0675
    }

    const calculateTotal = (price: number, tax: number, markup: number) => {
        return price * (1 + markup / 100) + tax;
    }

    return (
        <Formik onSubmit={(values, helpers) => {
            onSubmit(values, () => helpers.resetForm());
        }} initialValues={new MaterialFormDto(material)} validationSchema={materialSchema} enableReinitialize>
            {props => {
                const { setFieldValue, values, handleChange } = props;
                const { price, markup, tax } = values;

                const handleCreateCategoryClicked = () => {
                    modalStore.open(<CategoryFormModal onSubmit={async (dto: CategoryFormDto) => {
                        const category = await onCreateCategory(dto);
                        setFieldValue('categoryId', category.id);
                        modalStore.close();
                    }} />)
                }

                const handleCreateBrandClicked = () => {
                    modalStore.open(<BrandFormModal onSubmit={async (dto: BrandFormDto) => {
                        const brand = await onCreateBrand(dto);
                        setFieldValue('brandId', brand.id);
                        modalStore.close();
                    }} />)
                }

                const handlePriceChanged = (e: React.ChangeEvent<any>) => {
                    handleChange(e);
                    const value = +e.currentTarget.value;
                    if (!isNaN(value)) {
                        const tax = calculateTax(value)
                        const total = calculateTotal(value, tax, +markup);
                        setFieldValue('tax', tax.toFixed(2))
                        setFieldValue('salePrice', total.toFixed(2));
                    }
                }

                const handleMarkupChanged = (e: React.ChangeEvent<any>) => {
                    handleChange(e);
                    const value = +e.currentTarget.value;
                    if (!isNaN(value)) {
                        const total = calculateTotal(+price, +tax, value);
                        setFieldValue('salePrice', total.toFixed(2))
                    }
                }
                return <Fragment>
                    <Row>
                        <Col md={6}>
                            <FormikInput name='name' label='Name' />
                            <FormikSelect name='categoryId' label='Category' options={categories.map(CategoryDto.toOption)} onAddClicked={handleCreateCategoryClicked} onAddTooltip='Create Category' />
                            <FormikSelect name='brandId' label='Brand' options={brands.map(BrandDto.toOption)} onAddClicked={handleCreateBrandClicked} onAddTooltip='Create Brand' />
                            <FormikTextArea name='description' label='Description' />
                            <FormikInput name='modelNumber' label='Model #' />
                            <FormikInput name='size' label='Size' />
                        </Col>
                        <Col md={6}>
                            <FormikCurrencyInput name='price' label='Price' onChange={handlePriceChanged} />
                            <FormikCurrencyInput name='tax' label='Tax' disabled />
                            <FormikPercentageInput name='markup' label='Markup' onChange={handleMarkupChanged} />
                            <FormikCurrencyInput name='salePrice' label='Sale Price' />
                        </Col>
                    </Row>
                    <div className="d-flex">

                        <FormikSubmitButton className='ml-auto' />
                    </div>
                </Fragment>
            }}
        </Formik>
    )
}

export default MaterialForm
