import { useCallback } from "react";
import CategoryDto from "../dtos/category/Category.dto";
import RequestFactory from "../requests/RequestFactory";
import CategoryFormDto from "../dtos/category/CategoryForm.dto";
import useRequestStore from "./useRequestStore";
import useNotificationStore from "./useNotificationStore";
import useCollection from "./useCollection";
const categoryRequests = RequestFactory.CategoryRequests;

const useCategories = () => {
    //#region State
    const { items: categories,
        setItems: setCategories,
        addItem: addCategory,
        updateItem: updateCategory,
        removeItem: removeCategory } = useCollection<CategoryDto>([]);
    const requestStore = useRequestStore();
    const notificationStore = useNotificationStore();
    //#endregion

    //#region Handlers

    const handleLoadCategories = useCallback(async () => {
        const categories = await requestStore.runRequest(
            categoryRequests.getCategories,
            "Loading Categories"
        );
        setCategories(categories);
    }, [setCategories, requestStore]);

    const handleCreateCategory = useCallback(
        async (dto: CategoryFormDto) => {
            const action = () => categoryRequests.createCategory(dto);
            const category = await requestStore.runRequest(
                action,
                "Creating Category"
            );

            addCategory(category);
            notificationStore.sendSuccessNotification("Category Created");
            return category;
        },
        [addCategory, requestStore, notificationStore]
    );

    const handleUpdateCategory = useCallback(
        async (id: string, dto: CategoryFormDto) => {
            const action = () => categoryRequests.updateCategory(id, dto);
            const category = await requestStore.runRequest(
                action,
                "Updating Category"
            );
            updateCategory(id, category);
            notificationStore.sendSuccessNotification("Category Updated");
            return category;
        },
        [updateCategory, requestStore, notificationStore]
    );

    const handleDeleteCategory = useCallback(
        async (id: string) => {
            const action = () => categoryRequests.deleteCategory(id);
            await requestStore.runRequest(action, "Deleting Category");
            removeCategory(id);
            notificationStore.sendSuccessNotification("Category Deleted");
        },
        [removeCategory, requestStore, notificationStore]
    );
    //#endregion

    return {
        categories,
        loadCategories: handleLoadCategories,
        createCategory: handleCreateCategory,
        updateCategory: handleUpdateCategory,
        deleteCategory: handleDeleteCategory,
    };
};

export default useCategories;
