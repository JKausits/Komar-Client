import { useParams } from "react-router-dom";

const useId = () => {
    //#region State
    const params = useParams<{ id: string }>();
    //#endregion
    return params.id;
}

export default useId;