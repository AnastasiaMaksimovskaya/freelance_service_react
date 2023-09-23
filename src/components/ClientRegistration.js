import Registration from "./Registration";

const ClientRegistration = (props) =>  {
    return (
        <><button onClick={() => props.changeRoleClient('performer')}>Зарегестрироваться как исполнитель</button>
        <h1>Вы регистрируетесь как заказчик</h1><Registration current = {props.current}></Registration></>
    )
}
export default ClientRegistration