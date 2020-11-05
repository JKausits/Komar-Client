import _ from 'lodash'

export default class PaginationSearchParamsDto {
    page: number = 0;
    pageSize: number = 1;

    setPage(page: number) {
        const copy = this.clone();
        copy.page = page;
        return copy;
    }

    clone() {
        return _.cloneDeep(this);
    }

    toQueryString() {
        return `page=${this.page}&pageSize=${this.pageSize}`
    }
}