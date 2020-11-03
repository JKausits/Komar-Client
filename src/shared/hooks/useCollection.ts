import { useState } from "react";
import IIdentifiable from "../interfaces/IIdentifiable";
import _ from 'lodash'

const useCollection = <T extends IIdentifiable>(initial: T[]) => {
    //#region State
    const [items, setItems] = useState(initial);
    //#endregion

    const addItem = (item: T) => {
        const copy = copyItems();
        copy.push(item);
        setItems(copy)
    }

    const updateItem = (id: string, item: T) => {
        const copy = items.map(i => {
            if (i.id === id) {
                return item;
            }
            return i;
        })
        setItems(copy);
    }

    const removeItem = (id: string) => {
        const copy = items.filter(i => i.id !== id);
        setItems(copy);
    }

    const copyItems = () => _.cloneDeep(items);

    return {
        items, setItems, addItem, updateItem, removeItem
    }
}

export default useCollection;