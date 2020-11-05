import React from 'react'
import { Pagination } from 'react-bootstrap'

interface IProps {
    setPage: (page: number) => void;
    page: number;
    pageSize: number;
    count: number;
}

const Paginator: React.FC<IProps> = ({ setPage, page, pageSize, count }) => {

    //#region UI Helpers
    const getItems = () => {
        const pageCount = Math.ceil(count / pageSize);
        const items: React.ReactNode[] = [];
        items.push(<Pagination.Prev disabled={page === 0} onClick={() => setPage(page - 1)} key='prev' />)
        for (let i = 0; i < pageCount; i++) {
            items.push(<Pagination.Item active={page === i} onClick={() => setPage(i)} key={i}>{i + 1}</Pagination.Item>)
        }
        items.push(<Pagination.Next disabled={page === pageCount - 1} onClick={() => setPage(page + 1)} key='next' />)
        return items;
    }
    //#endregion

    return (
        <div>
            <Pagination>{getItems()}</Pagination>
        </div>
    )
}

export default Paginator
