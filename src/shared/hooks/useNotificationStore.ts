import useRootStoreContext from "./useRootStoreContext"

const useNotificationStore = () => {
    //#region State
    const rootStoreContext = useRootStoreContext();
    //#endregion

    return rootStoreContext.notificationStore;
}

export default useNotificationStore;