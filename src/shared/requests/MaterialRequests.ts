import MaterialDetailDto from "../dtos/material/MaterialDetail.dto";
import MaterialFormDto from "../dtos/material/MaterialForm.dto";
import MaterialListDto from "../dtos/material/MaterialList.dto";
import MaterialSearchParamsDto from "../dtos/material/MaterialSearchParams.dto";
import PaginationResultDto from "../dtos/PaginationResult.dto";
import IAgent from "../interfaces/requests/IAgent";
import IMaterialRequests from "../interfaces/requests/IMaterialRequests";

export default class MaterialRequests implements IMaterialRequests {
    private base: string = '/material'
    constructor(private agent: IAgent) { }

    getMaterial = (id: string) => this.agent.getRequest<MaterialDetailDto>(`${this.base}/${id}`)
    getMaterials = (params: MaterialSearchParamsDto) => this.agent.getRequest<PaginationResultDto<MaterialListDto>>(`${this.base}?${params.toQueryString()}`)
    createMaterial = (dto: MaterialFormDto) => this.agent.postRequest<MaterialDetailDto>(this.base, dto);
    updateMaterial = (id: string, dto: MaterialFormDto) => this.agent.putRequest<MaterialDetailDto>(`${this.base}/${id}`, dto);
    deleteMaterial = (id: string) => this.agent.deleteRequest<void>(`${this.base}/${id}`)
}