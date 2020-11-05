import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AddButton from '../../../shared/components/buttons/AddButton';
import InfoButton from '../../../shared/components/buttons/InfoButton';
import Paginator from '../../../shared/components/Paginator';
import MaterialListDto from '../../../shared/dtos/material/MaterialList.dto';
import MaterialSearchParamsDto from '../../../shared/dtos/material/MaterialSearchParams.dto';
import useMaterials from '../../../shared/hooks/useMaterials';
import DeleteMaterialButton from '../components/DeleteMaterialButton';
import EditMaterialButton from '../components/EditMaterialButton';
import MaterialList from '../components/MaterialList';
import MaterialListFilter from '../components/MaterialListFilter';

const MaterialListPage = () => {
    //#region State 
    const history = useHistory();
    const [params, setParams] = useState(new MaterialSearchParamsDto())
    const [count, setCount] = useState(0);
    const { materials, loadMaterials, deleteMaterial } = useMaterials();
    //#endregion

    //#region Handlers
    const handleSearch = (values: { categoryId?: string, brandId?: string, term?: string }) => {
        setParams(params => params.setParams(values.categoryId, values.brandId, values.term))
    }
    //#endregion

    //#region Effects
    useEffect(() => {
        const load = async () => {
            const result = await loadMaterials(params);
            setCount(result.count);
        }
        load();
    }, [loadMaterials, params, setCount])
    //#endregion

    //#region UI Helpers
    const actions = (material: MaterialListDto) => {
        return <Fragment>
            <InfoButton className='mr-1' tooltip='Info Material' onClick={() => history.push(`/material/${material.id}`)} />
            <EditMaterialButton className='mr-1' material={material} />
            <DeleteMaterialButton material={material} onDeleteConfirm={async () => await deleteMaterial(material.id)} />
        </Fragment>
    }
    //#endregion

    return (
        <div className='h-100 d-flex flex-column'>
            <div className="d-flex my-2">
                <h3>Materials</h3>
                <AddButton className='ml-auto' tooltip='Create Material' onClick={() => history.push('/material/new')} />
            </div>
            <MaterialListFilter onSearch={handleSearch} />
            <div className="flex-fill">

                <MaterialList materials={materials} actions={actions} />
            </div>
            <div className="d-flex justify-content-end">

                <Paginator count={count} pageSize={params.pageSize} page={params.page} setPage={(page: number) => setParams(params => params.setPage(page))} />
            </div>
        </div>
    )
}

export default MaterialListPage
