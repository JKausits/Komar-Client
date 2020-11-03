import { Formik } from 'formik'
import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'
import FormikInput from '../../../shared/components/inputs/formik-inputs/FormikInput'
import useModalStore from '../../../shared/hooks/useModalStore'
import * as Yup from 'yup'
import { formatMaxLength, formatRequired } from '../../../shared/util/error-formatters'
import BrandDto from '../../../shared/dtos/brand/Brand.dto'
import BrandFormDto from '../../../shared/dtos/brand/BrandForm.dto'

const brandSchema = Yup.object().shape({
    name: Yup.string().required(formatRequired('Name')).max(100, formatMaxLength('Name', 100))
})

interface IProps {
    brand?: BrandDto;
    onSubmit: (dto: BrandFormDto) => Promise<void>;
}

const BrandFormModal: React.FC<IProps> = ({ brand, onSubmit }) => {
    //#region State
    const modalStore = useModalStore();
    //#endregion

    return (
        <Formik initialValues={new BrandFormDto(brand)} onSubmit={values => onSubmit(values)} validationSchema={brandSchema}>
            {(props) => {
                const { isValid, dirty, submitForm } = props
                return (
                    <Fragment>
                        <Modal.Header>{brand ? 'Edit' : 'Create'} Brand</Modal.Header>
                        <Modal.Body>
                            <FormikInput name='name' label='Name' />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='primary' type='submit' disabled={!dirty || !isValid} onClick={submitForm}>Submit</Button>
                            <Button variant='secondary' onClick={modalStore.close}>Cancel</Button>
                        </Modal.Footer>
                    </Fragment>
                )
            }
            }
        </Formik>
    )
}

export default BrandFormModal
