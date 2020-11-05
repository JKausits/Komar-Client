import IAgent from "../interfaces/requests/IAgent";
import IBrandRequests from "../interfaces/requests/IBrandRequests";
import ICategoryRequests from "../interfaces/requests/ICategoryRequests";
import IMaterialRequests from "../interfaces/requests/IMaterialRequests";
import Agent from "./Agent";
import BrandRequests from "./BrandRequests";
import CategoryRequests from "./CategoryRequests";
import MaterialRequests from "./MaterialRequests";

export default class RequestFactory {
    private static agent: IAgent = new Agent();

    static CategoryRequests: ICategoryRequests = new CategoryRequests(RequestFactory.agent);

    static BrandRequests: IBrandRequests = new BrandRequests(RequestFactory.agent);

    static MaterialRequests: IMaterialRequests = new MaterialRequests(RequestFactory.agent);
}