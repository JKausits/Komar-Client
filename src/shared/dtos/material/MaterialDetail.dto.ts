import BrandDto from "../brand/Brand.dto";
import CategoryDto from "../category/Category.dto";

export default class MaterialDetailDto {
    id: string = '';
    name: string = '';
    description: string = '';
    size?: string;
    modelNumber?: string;
    price: number = 0;
    salePrice: number = 0;
    tax: number = 0;
    markup: number = 0;
    category: CategoryDto = new CategoryDto();
    brand: BrandDto = new BrandDto();
}