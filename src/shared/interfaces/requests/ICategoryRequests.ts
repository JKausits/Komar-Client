import CategoryDto from "../../dtos/category/Category.dto";
import CategoryFormDto from "../../dtos/category/CategoryForm.dto";

export default interface ICategoryRequests {
    getCategories: () => Promise<CategoryDto[]>;
    createCategory: (dto: CategoryFormDto) => Promise<CategoryDto>;
    updateCategory: (id: string, dto: CategoryFormDto) => Promise<CategoryDto>;
    deleteCategory: (id: string) => Promise<void>;
}
