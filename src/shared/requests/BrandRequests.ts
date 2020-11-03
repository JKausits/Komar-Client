import IBrandRequests from "../interfaces/requests/IBrandRequests";
import IAgent from "../interfaces/requests/IAgent";
import BrandDto from "../dtos/brand/Brand.dto";
import BrandFormDto from "../dtos/brand/BrandForm.dto";

export default class BrandRequests implements IBrandRequests {
    private base: string = "/brand";
    constructor(private readonly agent: IAgent) { }

    getBrands = () => this.agent.getRequest<BrandDto[]>(this.base);

    createBrand = (dto: BrandFormDto) =>
        this.agent.postRequest<BrandDto>(this.base, dto);

    updateBrand = (id: string, dto: BrandFormDto) =>
        this.agent.putRequest<BrandDto>(`${this.base}/${id}`, dto);
    deleteBrand = (id: string) =>
        this.agent.deleteRequest<void>(`${this.base}/${id}`);
}
