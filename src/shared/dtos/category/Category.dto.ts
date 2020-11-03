import OptionDto from "../Option.dto";
import IIdentifiable from '../../interfaces/IIdentifiable'

export default class CategoryDto implements IIdentifiable {
    id: string = '';
    name: string = "";

    public static toOption(category: CategoryDto) {
        return new OptionDto(category.id, category.name);
    }
}
