import { createContext } from "react";
import ModalStore from "./ModalStore";
import NotificationStore from "./NotificationStore";
import RequestStore from "./RequestStore";

export class RootStore {
    readonly requestStore: RequestStore;
    readonly notificationStore: NotificationStore;
    readonly modalStore: ModalStore;

    constructor() {
        this.requestStore = new RequestStore();
        this.notificationStore = new NotificationStore();
        this.modalStore = new ModalStore();
    }
}

const RootStoreContext = createContext(new RootStore());

export default RootStoreContext;