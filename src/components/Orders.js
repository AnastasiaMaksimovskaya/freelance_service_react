import './Orders.css'
import {useEffect, useState} from "react";
import axiosInstance from "./AxiosInstance";
import Pagination from "./Pagination";
import {useSearchParams} from "react-router-dom";
import {useLoading} from "./LoaderProvider";
import Loader from "./Loader";


export default function Orders(props) {

    const [items, setItems] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [total, setTotal] = useState();


    const pg = searchParams.get("pg") ?? 1;

    const pageSize = searchParams.get("size") ?? 5;

    const searchData = {
        "page": pg,
        "pageSize": pageSize
    };

    useEffect(() => {
        axiosInstance
            .post(`http://localhost:8080/order/getOrders`, searchData).then(r => {
            if (r !== undefined && r.data !== undefined) {
                setItems(r.data.objects)
                setTotal(r.data.total)
            }
        });
    }, [pg, pageSize])


    function changePerPage(e) {
        let currentPg;
        if (total <= e.target.value * (pg - 1)) {
            currentPg = 1;
        } else {
            currentPg = searchParams.get("pg") ?? 1;
        }
        setSearchParams({'size': e.target.value, 'pg': currentPg});
    }

    const response = () => axiosInstance
        .post(`http://localhost:8080/order/getOrders`, searchData).then(r => {
            if (r !== undefined && r.data !== undefined) {
                setItems(r.data.objects)
                setTotal(r.data.total)
            }
        });

    useEffect(() => {
        response();
    }, []);

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
                <div className="pagination-content">
                    <Pagination totalCount={total}/>
                    <div className="per-page">
                        <span>Показать на странице</span>
                        <select
                            onChange={e => {
                                changePerPage(e)
                            }}
                            name="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}