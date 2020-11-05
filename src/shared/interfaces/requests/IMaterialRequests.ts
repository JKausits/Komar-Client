import MaterialDetailDto from "../../dtos/material/MaterialDetail.dto";
import MaterialFormDto from "../../dtos/material/MaterialForm.dto";
import MaterialListDto from "../../dtos/material/MaterialList.dto";
import MaterialSearchParamsDto from "../../dtos/material/MaterialSearchParams.dto";
import PaginationResultDto from "../../dtos/PaginationResult.dto";

export default interface IMaterialRequests {
    getMaterial: (id: string) => Promise<MaterialDetailDto>;
    getMaterials: (params: MaterialSearchParamsDto) => Promise<PaginationResultDto<MaterialListDto>>
    createMaterial: (dto: MaterialFormDto) => Promise<MaterialDetailDto>;
    updateMaterial: (id: string, dto: MaterialFormDto) => Promise<MaterialDetailDto>
    deleteMaterial: (id: string) => Promise<void>
}