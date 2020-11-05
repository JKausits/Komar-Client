import IIdentifiable from "../../interfaces/IIdentifiable";
import BrandDto from "../brand/Brand.dto";
import CategoryDto from "../category/Category.dto";

export default class MaterialListDto implements IIdentifiable {
    id: string = '';
    name: string = '';
    size?: string;
    modelNumber?: string;
    salePrice: number = 0;
    category: CategoryDto = new CategoryDto();
    brand: BrandDto = new BrandDto();
}