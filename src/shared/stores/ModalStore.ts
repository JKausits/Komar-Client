import { action, observable } from "mobx";

export default class ModalStore {
    @observable state: { content: React.ReactNode, isOpen: boolean, size: 'sm' | 'lg' | 'xl' | undefined } = { content: undefined, isOpen: false, size: undefined };


    @action open = (content: React.ReactNode, size: 'sm' | 'lg' | 'xl' | undefined = undefined) => {
        this.state = { content, isOpen: true, size };
    }

    @action close = () => {
        this.state = { content: undefined, isOpen: false, size: undefined }
    }
}