import {host} from "../App";
import {Registration} from "./Registration";

export default function ClientRegistration(props) {
    return (<>
        <div className="container-fluid">
            <Registration current={props.current}></Registration>
            <div className="role-msg">
                <div className="role-msg-content">
                    <h1>Вы регистрируетесь как заказчик</h1>
                    <a href={host + 'performer/reg'}>Зарегестрироваться как исполнитель</a>
                </div>
            </div>
        </div>
    </>)
}