import Registration from "./Registration";


const PerformerRegistration = props  => {
    return (
        <>
            <button onClick={() => props.changeRolePerformer('client')}>Зарегестрироваться как заказчик</button>
            <h1>Вы регистрируетесь как исполнитель</h1><Registration current = {props.current}></Registration></>
    )
}
export default PerformerRegistration