import { useContext } from "react";
import RootStoreContext from "../stores/RootStore"

const useRootStoreContext = () => {
    //#region State
    const rootStoreContext = useContext(RootStoreContext);
    //#endregion

    return rootStoreContext;
}

export default useRootStoreContext;