import Registration from "./Registration";
import {host} from "../App";

export default function ClientRegistration (props) {
    return (<>
        <div className="container-fluid">
            <div className="role-msg">
                <h1>Вы регистрируетесь как заказчик</h1>
                <a href={host + 'performer/reg'}>Зарегестрироваться как исполнитель</a>
            </div>
            <Registration current={props.current}></Registration>
        </div>
    </>)
}