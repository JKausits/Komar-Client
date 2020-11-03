import BrandDto from "./Brand.dto";

export default class BrandFormDto {
    name: string = "";

    constructor(brand?: BrandDto) {
        if (brand) {
            Object.assign(this, brand);
        }
    }
}
