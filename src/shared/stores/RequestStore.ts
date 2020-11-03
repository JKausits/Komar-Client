import { action, observable, runInAction } from "mobx";

export default class RequestStore {
    @observable requests: string[] = [];

    @action runRequest = async <T>(action: () => Promise<T>, message: string): Promise<T> => {
        this.requests.push(message);
        try {
            return await action();
        } catch (error) {
            throw error;
        } finally {
            runInAction(() => {
                this.requests = this.requests.filter(x => x !== message);
            })
        }
    }
}