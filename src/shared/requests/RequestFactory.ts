import IAgent from "../interfaces/requests/IAgent";
import Agent from "./Agent";
import CategoryRequests from "./CategoryRequests";

export default class RequestFactory {
    private static agent: IAgent = new Agent();

    static CategoryRequests = new CategoryRequests(RequestFactory.agent);
}