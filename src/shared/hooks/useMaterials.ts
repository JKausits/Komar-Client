import { useCallback } from "react";
import RequestFactory from "../requests/RequestFactory";
import useRequestStore from "./useRequestStore";
import useNotificationStore from "./useNotificationStore";
import useCollection from "./useCollection";
import MaterialListDto from "../dtos/material/MaterialList.dto";
import MaterialSearchParamsDto from "../dtos/material/MaterialSearchParams.dto";
import MaterialFormDto from "../dtos/material/MaterialForm.dto";
const materialRequests = RequestFactory.MaterialRequests;

const useMaterials = () => {
    //#region State
    const { items: materials,
        setItems: setMaterials,
        removeItem: removeMaterial } = useCollection<MaterialListDto>([]);
    const requestStore = useRequestStore();
    const notificationStore = useNotificationStore();
    //#endregion

    //#region Handlers

    const handleLoadMaterials = useCallback(async (params: MaterialSearchParamsDto) => {
        const action = () => materialRequests.getMaterials(params)
        const results = await requestStore.runRequest(
            action,
            "Loading Materials"
        );
        setMaterials(results.items);
        return results;
    }, [setMaterials, requestStore]);


    const handleCreateMaterial = useCallback(
        async (dto: MaterialFormDto) => {
            const action = () => materialRequests.createMaterial(dto);
            const material = await requestStore.runRequest(
                action,
                "Creating Material"
            );

            notificationStore.sendSuccessNotification("Material Created");
            return material;
        },
        [requestStore, notificationStore]
    );

    const handleDeleteMaterial = useCallback(
        async (id: string) => {
            const action = () => materialRequests.deleteMaterial(id);
            await requestStore.runRequest(action, "Deleting Material");
            removeMaterial(id);
            notificationStore.sendSuccessNotification("Material Deleted");
        },
        [removeMaterial, requestStore, notificationStore]
    );
    //#endregion

    return {
        materials,
        loadMaterials: handleLoadMaterials,
        createMaterial: handleCreateMaterial,
        deleteMaterial: handleDeleteMaterial,
    };
};

export default useMaterials;
