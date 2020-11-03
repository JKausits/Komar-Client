import BrandDto from "../../dtos/brand/Brand.dto";
import BrandFormDto from "../../dtos/brand/BrandForm.dto";

export default interface IBrandRequests {
    getBrands: () => Promise<BrandDto[]>;
    createBrand: (dto: BrandFormDto) => Promise<BrandDto>;
    updateBrand: (id: string, dto: BrandFormDto) => Promise<BrandDto>;
    deleteBrand: (id: string) => Promise<void>;
}
