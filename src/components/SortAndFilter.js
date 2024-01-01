import {useSearchParams} from "react-router-dom";

export default function SortAndFilter(props) {

    const [searchParams, setSearchParams] = useSearchParams();

    const pg = searchParams.get("pg") ?? 1;

    const pageSize = searchParams.get("size") ?? 5;

    const sort = searchParams.get("sort") ?? 'asc';
    const orderBy = searchParams.get("orderBy") ?? 'updated';

    function refreshSort() {
        if (sort === 'asc') {
            setSearchParams({'pg': pg, 'size': pageSize, 'sort': 'desc', 'orderBy': orderBy});
        } else {
            setSearchParams({'pg': pg, 'size': pageSize, 'sort': 'asc', 'orderBy': orderBy});
        }
    }
    function refreshOrderBy(e) {
        setSearchParams({'pg': pg, 'size': pageSize, 'sort': sort, 'orderBy': e.target.value});
    }


    return (
        <div style={{marginRight: 20}}>
            <span style={{ margin : 20}}>Сортировать по:</span>
                <select
                onChange={e => {
                    refreshOrderBy(e)
                }}
                name="select">
                {props.options.map((option) => (
                    <option>{option}</option>
                ))}</select>
                <button className="transparent-button" onClick={refreshSort}>
                    <span style={{ color: sort === 'asc' ? '#18003DFF': 'grey', fontSize: 25, fontWeight: 'bold'}}>↑</span>
                    <span style={{ color: sort === 'desc' ? '#18003DFF': 'grey', fontSize: 25, fontWeight: 'bold'}}>↓</span>
                </button>
        </div>
    )
}