import React, { Fragment, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import BackButton from '../../../shared/components/buttons/BackButton'
import CurrencyLabel from '../../../shared/components/labels/CurrencyLabel'
import PercentageLabel from '../../../shared/components/labels/PercentageLabel'
import useMaterial from '../../../shared/hooks/useMaterial'
import DeleteMaterialButton from '../components/DeleteMaterialButton'
import EditMaterialButton from '../components/EditMaterialButton'

const MaterialDetailPage = () => {
    //#region State
    const { material, loadMaterialFromParams, deleteMaterial } = useMaterial();
    const history = useHistory();
    //#endregion

    //#region Effects
    useEffect(() => {
        loadMaterialFromParams();
    }, [loadMaterialFromParams])
    //#endregion

    //#region UI Helpers
    const keyValueLabel = (key: string, value: React.ReactNode) => {
        return <div>
            <strong style={{ width: '100px', display: 'inline-block' }}>{key}:</strong>
            {value}
            <hr />
        </div>
    }
    //#endregion

    if (material === undefined)
        return <Fragment>Loading...</Fragment>

    return (
        <div>
            <div className="d-flex justify-content-end my-2">
                <BackButton />
            </div>
            <Card>
                <Card.Header>
                    <div className="d-flex">
                        <h5>{material.name}</h5>
                        <div className="ml-auto">
                            <EditMaterialButton className='mr-1' material={material} />
                            <DeleteMaterialButton material={material} onDeleteConfirm={async () => {
                                await deleteMaterial();
                                history.push('/material')
                            }} />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            {keyValueLabel('Name', material.name)}
                            {keyValueLabel('Category', material.category.name)}
                            {keyValueLabel('Brand', material.brand.name)}
                            {keyValueLabel('Size', material.size)}
                            {keyValueLabel('Model #', material.modelNumber)}
                        </Col>
                        <Col md={6}>
                            {keyValueLabel('Price', <CurrencyLabel value={material.price} />)}
                            {keyValueLabel('Tax', <CurrencyLabel value={material.tax} />)}
                            {keyValueLabel('Markup', <PercentageLabel value={material.markup} />)}
                            {keyValueLabel('Sale Price', <CurrencyLabel value={material.salePrice} />)}
                        </Col>
                        <Col>
                            <div>
                                <strong>Description:</strong>
                            </div>
                            <hr />
                            <p>
                                {material.description}
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MaterialDetailPage
