import './Orders.css'
import axios from "axios";
import {useEffect, useState} from "react";


export default function Orders (props) {

    const [items, setItems] = useState([]);

    const response = () => axios
        .get(`http://localhost:8080/order/getOrders`).then(r => {
            setItems(r.data.objects)
        });

    useEffect(() => {
        response();
    }, []);

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
            </div>
        </>
    )
}