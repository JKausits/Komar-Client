import { useCallback } from "react";
import BrandDto from "../dtos/brand/Brand.dto";
import RequestFactory from "../requests/RequestFactory";
import BrandFormDto from "../dtos/brand/BrandForm.dto";
import useRequestStore from "./useRequestStore";
import useNotificationStore from "./useNotificationStore";
import useCollection from "./useCollection";
const BrandRequests = RequestFactory.BrandRequests;

const useBrands = () => {
    //#region State
    const { items: brands,
        setItems: setBrands,
        addItem: addBrand,
        updateItem: updateBrand,
        removeItem: removeBrand } = useCollection<BrandDto>([]);
    const requestStore = useRequestStore();
    const notificationStore = useNotificationStore();
    //#endregion

    //#region Handlers

    const handleLoadBrands = useCallback(async () => {
        const brands = await requestStore.runRequest(
            BrandRequests.getBrands,
            "Loading Brands"
        );
        setBrands(brands);
    }, [setBrands, requestStore]);

    const handleCreateBrand = useCallback(
        async (dto: BrandFormDto) => {
            const action = () => BrandRequests.createBrand(dto);
            const Brand = await requestStore.runRequest(
                action,
                "Creating Brand"
            );

            addBrand(Brand);
            notificationStore.sendSuccessNotification("Brand Created");
            return Brand;
        },
        [addBrand, requestStore, notificationStore]
    );

    const handleUpdateBrand = useCallback(
        async (id: string, dto: BrandFormDto) => {
            const action = () => BrandRequests.updateBrand(id, dto);
            const Brand = await requestStore.runRequest(
                action,
                "Updating Brand"
            );
            updateBrand(id, Brand);
            notificationStore.sendSuccessNotification("Brand Updated");
            return Brand;
        },
        [updateBrand, requestStore, notificationStore]
    );

    const handleDeleteBrand = useCallback(
        async (id: string) => {
            const action = () => BrandRequests.deleteBrand(id);
            await requestStore.runRequest(action, "Deleting Brand");
            removeBrand(id);
            notificationStore.sendSuccessNotification("Brand Deleted");
        },
        [removeBrand, requestStore, notificationStore]
    );
    //#endregion

    return {
        brands,
        loadBrands: handleLoadBrands,
        createBrand: handleCreateBrand,
        updateBrand: handleUpdateBrand,
        deleteBrand: handleDeleteBrand,
    };
};

export default useBrands;
