import { Formik } from 'formik'
import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'
import FormikInput from '../../../shared/components/inputs/formik-inputs/FormikInput'
import CategoryDto from '../../../shared/dtos/category/Category.dto'
import CategoryFormDto from '../../../shared/dtos/category/CategoryForm.dto'
import useModalStore from '../../../shared/hooks/useModalStore'
import * as Yup from 'yup'
import { formatMaxLength, formatRequired } from '../../../shared/util/error-formatters'

const categorySchema = Yup.object().shape({
    name: Yup.string().required(formatRequired('Name')).max(100, formatMaxLength('Name', 100))
})

interface IProps {
    category?: CategoryDto;
    onSubmit: (dto: CategoryFormDto) => Promise<void>;
}

const CategoryFormModal: React.FC<IProps> = ({ category, onSubmit }) => {
    //#region State
    const modalStore = useModalStore();
    //#endregion

    return (
        <Formik initialValues={new CategoryFormDto(category)} onSubmit={values => onSubmit(values)} validationSchema={categorySchema}>
            {(props) => {
                const { isValid, dirty, submitForm } = props
                return (
                    <Fragment>
                        <Modal.Header>{category ? 'Edit' : 'Create'} Category</Modal.Header>
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

export default CategoryFormModal
