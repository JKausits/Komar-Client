import MaterialDetailDto from "./MaterialDetail.dto";

export default class MaterialFormDto {
    name: string = '';
    description: string = '';
    size?: string = '';
    modelNumber?: string = '';
    price: number = 0;
    salePrice: number = 0;
    tax: number = 0;
    markup: number = 30;
    categoryId: string = '';
    brandId: string = '';

    constructor(material?: MaterialDetailDto) {
        if (material) {
            this.name = material.name;
            this.description = material.description;
            this.size = material.size;
            this.modelNumber = material.modelNumber;
            this.price = material.price;
            this.salePrice = material.salePrice;
            this.tax = material.tax;
            this.markup = material.markup;
            this.categoryId = material.category.id
            this.brandId = material.brand.id;
        }
    }
}