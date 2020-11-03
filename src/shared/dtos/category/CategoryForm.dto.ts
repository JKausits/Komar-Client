import CategoryDto from "./Category.dto";

export default class CategoryFormDto {
    name: string = "";

    constructor(category?: CategoryDto) {
        if (category) {
            Object.assign(this, category);
        }
    }
}
