export default interface IAgent {
    getRequest: <T>(url: string) => Promise<T>;
    postRequest: <T>(url: string, body: any) => Promise<T>;
    putRequest: <T>(url: string, body: any) => Promise<T>;
    deleteRequest: <T>(url: string) => Promise<T>;
}
