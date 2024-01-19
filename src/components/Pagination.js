import './Pagination.css'
import {useSearchParams} from "react-router-dom";

export default function Pagination(props) {

    const [searchParams, setSearchParams] = useSearchParams();

    const pg = searchParams.get("pg") ?? 1;

    const pageSize = searchParams.get("size") ?? 5;

    const sort = searchParams.get("sort") ?? 'asc';
    const orderBy = searchParams.get("orderBy") ?? 'updated';


    const {
        totalCount,
        siblingCount = 1,
    } = props;


    let pageCount;
    if (totalCount % pageSize === 0) {
        pageCount = totalCount / pageSize;
    } else {
        pageCount = Math.floor(totalCount / pageSize) + 1;
    }

    function changePerPage(e) {
        let currentPg;
        if (props.totalCount <= e.target.value * (pg - 1)) {
            currentPg = 1;
        } else {
            currentPg = searchParams.get("pg") ?? 1;
        }
        setSearchParams({'size': e.target.value, 'pg': currentPg, 'sort': sort, 'orderBy': orderBy});
    }

    function refreshSearch(e) {
        setSearchParams({'pg': e.target.value, 'size': pageSize, 'sort': sort, 'orderBy': orderBy});
    }

    function createCssStyle(pageNumber) {
        const className = ['visible-page'];
        if (pageNumber === pg) {
            className.push('current-page');
        }
        return className.join(', ');
    }

    return (
        <div className="pagination-content">
            <div className="pagination">
                {(() => {
                    const arr = [];
                    if (pg > Number(siblingCount) + 1) {
                        arr.push(
                            <button className={createCssStyle(1)} onClick={refreshSearch} value={1}>
                                {1}
                            </button>
                        );
                        if (pg > Number(siblingCount) + 2) {
                            const hiddenPages = [<option style={{display: 'none'}}></option>];
                            for (let j = 2; j < pg - siblingCount; j++) {
                                hiddenPages.push(<option value={j}>{j}</option>)
                            }
                            arr.push(<div className="hidden-pages">
                                <button className="dropbtn">...</button>
                                <select
                                    className="dropdown-content"
                                    onChange={e => {
                                        refreshSearch(e)
                                    }}
                                    name="select">
                                    {hiddenPages}
                                </select>
                            </div>)
                        }
                    }

                    for (let i = Number(pg) - Number(siblingCount) > 0 ? Number(pg) - Number(siblingCount) : 1; i <= ((Number(pg) + Number(siblingCount)) > pageCount ? pageCount : Number(pg) + Number(siblingCount)); i++) {
                        arr.push(
                            <button className={createCssStyle(i)} onClick={refreshSearch} value={i}>
                                {i}
                            </button>
                        );
                    }
                    if (pg < pageCount - Number(siblingCount) - 1) {
                        const hiddenPages = [<option style={{display: 'none'}}></option>];
                        for (let j = Number(pg) + Number(siblingCount) + 1; j < pageCount; j++) {
                            hiddenPages.push(<option value={j}>{j}</option>)
                        }
                        arr.push(<div className="hidden-pages">
                            <button className="dropbtn">...</button>
                            <select
                                value={pg}
                                className="dropdown-content"
                                onChange={e => {
                                    refreshSearch(e)
                                }}
                                name="select">
                                {hiddenPages}
                            </select>
                        </div>)
                    }

                    if (pg < Number(pageCount) - Number(siblingCount)) {
                        arr.push(
                            <button className={createCssStyle(pageCount)} onClick={refreshSearch} value={pageCount}>
                                {pageCount}
                            </button>
                        );
                    }

                    return arr;
                })()}
            </div>
            <div className="per-page">
                <span>Показать на странице</span>
                <select
                    onChange={e => {
                        changePerPage(e)
                    }}
                    name="select">
                    {props.options.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}