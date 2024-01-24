import {Registration} from "./Registration";
import {host} from "../App";

export default function PerformerRegistration(props) {
    return (
        <>
            <div className="container-fluid">
                <Registration current={props.current}></Registration>
                <div className="role-msg">
                    <div className="role-msg-content">
                        <h1>Вы регистрируетесь как исполнитель</h1>
                        <a href={host + 'client/reg'}>Зарегестрироваться как заказчик</a>
                    </div>
                </div>
            </div>
        </>
    )
}