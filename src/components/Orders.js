import './Orders.css'
import {useEffect, useState} from "react";
import axiosInstance from "./AxiosInstance";
import Pagination from "./Pagination";
import {useSearchParams} from "react-router-dom";
import {useLoading} from "./providers/LoaderProvider";
import Loader from "./Loader";
import SortAndFilter from "./SortAndFilter";


export default function Orders() {

    const [items, setItems] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [total, setTotal] = useState();


    const pg = searchParams.get("pg") ?? 1;
    const pageSize = searchParams.get("size") ?? 5;
    const sort = searchParams.get("sort") ?? 'asc';
    const orderBy = searchParams.get("orderBy") ?? 'updated';

    const searchData = {
        "page": pg,
        "pageSize": pageSize,
        "sort": sort,
        "orderBy": orderBy
    };

    useEffect(() => {
        axiosInstance
            .post(`http://localhost:8080/order/getOrders`, searchData).then(r => {
            if (r !== undefined && r.data !== undefined) {
                setItems(r.data.objects)
                setTotal(r.data.total)
            }
        });
    }, [pg, pageSize, sort, orderBy])


    const { loading, setLoading } = useLoading();
    if (!items || items.length === 0) {
        setLoading(true)
        return (
            (loading && <Loader></Loader>)
        );
    }
    setLoading(false)

    return (
        <>
            <div className="orders-container">
                <SortAndFilter options={['price', 'updated', 'name']}></SortAndFilter>
                {items.map((item) => (
                    <>
                        <div className="order-body">
                            <div className="order-name">{item.name}</div>
                            <div className="order-price">{item.price + ' ' + item.currency}</div>
                            <div className="order-info">
                                <div className="order-performer">Исполнителей: 0</div>
                                <div className="order-date">{item.created}</div>
                            </div>
                        </div>
                    </>
                ))}
                    <Pagination totalCount={total} options = {[1,2,5,10]}/>
            </div>
        </>
    )
}