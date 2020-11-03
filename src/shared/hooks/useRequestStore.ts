import useRootStoreContext from "./useRootStoreContext"

const useRequestStore = () => {
    //#region State
    const rootStoreContext = useRootStoreContext();
    //#endregion

    return rootStoreContext.requestStore;
}

export default useRequestStore;