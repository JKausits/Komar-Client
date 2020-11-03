import OptionDto from "../Option.dto";

export default class BrandDto {
    id: string = '';
    name: string = "";

    public static toOption(category: BrandDto) {
        return new OptionDto(category.id, category.name);
    }
}