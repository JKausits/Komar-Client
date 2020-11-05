import { useCallback, useState } from "react";
import MaterialDetailDto from "../dtos/material/MaterialDetail.dto";
import MaterialFormDto from "../dtos/material/MaterialForm.dto";
import RequestFactory from "../requests/RequestFactory";
import useId from "./useId";
import useNotificationStore from "./useNotificationStore";
import useRequestStore from "./useRequestStore";

const materialRequests = RequestFactory.MaterialRequests;

const useMaterial = () => {
    //#region State
    const [material, setMaterial] = useState<MaterialDetailDto>();
    const requestStore = useRequestStore();
    const notificationStore = useNotificationStore();
    const id = useId();
    //#endregion

    //#region Handlers
    const handleLoadMaterial = useCallback(async (id: string) => {
        const action = () => materialRequests.getMaterial(id);
        const material = await requestStore.runRequest(action, 'Loading Material')
        setMaterial(material);
        return material;
    }, [setMaterial, requestStore])

    const handleLoadMaterialFromParams = useCallback(async () => {
        if (id) {
            return handleLoadMaterial(id);
        }
    }, [id, handleLoadMaterial]);

    const handleUpdateMaterial = useCallback(async (dto: MaterialFormDto) => {
        const action = () => materialRequests.updateMaterial(material?.id!, dto);
        const result = await requestStore.runRequest(action, 'Updating Material')
        notificationStore.sendSuccessNotification('Material Updated');
        setMaterial(result);
        return result
    }, [requestStore, notificationStore, setMaterial, material]);

    const handleDeleteMaterial = useCallback(async () => {
        const action = () => materialRequests.deleteMaterial(material?.id!);
        await requestStore.runRequest(action, 'Deleting Material')
        notificationStore.sendSuccessNotification('Material Deleted')
        setMaterial(undefined);
        return;
    }, [requestStore, notificationStore, setMaterial, material])
    //#endregion

    return {
        material,
        loadMaterial: handleLoadMaterial,
        loadMaterialFromParams: handleLoadMaterialFromParams,
        updateMaterial: handleUpdateMaterial,
        deleteMaterial: handleDeleteMaterial
    }
}

export default useMaterial;