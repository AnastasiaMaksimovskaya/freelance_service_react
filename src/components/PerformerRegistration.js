import Registration from "./Registration";
import {host} from "../App";

export default function PerformerRegistration (props) {
    return (
        <>
            <div className="container-fluid">
                <div className="role-msg">
                    <h1>Вы регистрируетесь как исполнитель</h1>
                    <a href={host + 'client/reg'}>Зарегестрироваться как заказчик</a>
                </div>
                <Registration current={props.current}></Registration>
            </div>
        </>
    )
}