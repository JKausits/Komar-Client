import PaginationSearchParamsDto from "../PaginationSearchParams.dto";

export default class MaterialSearchParamsDto extends PaginationSearchParamsDto {
    categoryId?: string;
    brandId?: string;
    term?: string;

    setParams(categoryId?: string, brandId?: string, term?: string) {
        const copy = this.clone();
        copy.categoryId = categoryId;
        copy.brandId = brandId;
        copy.term = term;
        copy.page = 0;
        return copy;
    }

    toQueryString() {
        const queryStrings = [super.toQueryString()]

        if (this.categoryId) queryStrings.push(`categoryId=${this.categoryId}`)
        if (this.brandId) queryStrings.push(`brandId=${this.brandId}`)
        if (this.term) queryStrings.push(`term=${this.term}`)

        return queryStrings.join('&')
    }
}