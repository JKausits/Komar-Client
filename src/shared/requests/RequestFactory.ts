import IAgent from "../interfaces/requests/IAgent";
import Agent from "./Agent";
import BrandRequests from "./BrandRequests";
import CategoryRequests from "./CategoryRequests";

export default class RequestFactory {
    private static agent: IAgent = new Agent();

    static CategoryRequests = new CategoryRequests(RequestFactory.agent);

    static BrandRequests = new BrandRequests(RequestFactory.agent);
}