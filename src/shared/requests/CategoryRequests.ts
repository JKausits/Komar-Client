import ICategoryRequests from "../interfaces/requests/ICategoryRequests";
import IAgent from "../interfaces/requests/IAgent";
import CategoryDto from "../dtos/category/Category.dto";
import CategoryFormDto from "../dtos/category/CategoryForm.dto";

export default class CategoryRequests implements ICategoryRequests {
    private base: string = "/category";
    constructor(private readonly agent: IAgent) { }

    getCategories = () => this.agent.getRequest<CategoryDto[]>(this.base);

    createCategory = (dto: CategoryFormDto) =>
        this.agent.postRequest<CategoryDto>(this.base, dto);

    updateCategory = (id: string, dto: CategoryFormDto) =>
        this.agent.putRequest<CategoryDto>(`${this.base}/${id}`, dto);
    deleteCategory = (id: string) =>
        this.agent.deleteRequest<void>(`${this.base}/${id}`);
}
