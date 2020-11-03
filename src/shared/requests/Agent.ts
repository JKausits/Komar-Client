import axios from "axios";
import IAgent from "../interfaces/requests/IAgent";

const instance = axios.create({ baseURL: "http://localhost:5000/api" });

export default class Agent implements IAgent {
    getRequest = <T>(url: string) => instance.get<T>(url).then((x) => x.data);
    postRequest = <T>(url: string, body: any) =>
        instance.post<T>(url, body).then((x) => x.data);
    putRequest = <T>(url: string, body: any) =>
        instance.put<T>(url, body).then((x) => x.data);
    deleteRequest = <T>(url: string) =>
        instance.delete<T>(url).then((x) => x.data);
}
