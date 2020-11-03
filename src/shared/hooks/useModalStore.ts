import useRootStoreContext from "./useRootStoreContext"

const useModalStore = () => {
    //#region State
    const rootStoreContext = useRootStoreContext();
    //#endregion

    return rootStoreContext.modalStore;
}

export default useModalStore;