import './Auth.css'
import axios from "axios";
import App, {host} from "../App";
import {useNavigate} from "react-router-dom";

export default function Registration (props) {


    const userRole = props.current;

    const navigate = useNavigate();

    function reg(event) {
        event.preventDefault();
        const userData = {
            "firstName": event.target.form.elements.firstName.value,
            "lastName": event.target.form.elements.lastName.value,
            "login": event.target.form.elements.email.value,
            "middleName": event.target.form.elements.middleName.value,
            "password": event.target.form.elements.psw.value,
            "phoneNumber": event.target.form.elements.phoneNumber.value,
            "role": userRole === 'client' ? 'CLIENT' : 'PERFORMER'

        };
        axios
            .post(`http://localhost:8080/` + userRole + `/reg`, userData)
            .then(
                navigate('/')
            )
        ;
    }

    return (
        <form>
            <div className="container">
                <h2>Заполните поля для регистрации</h2>
                <hr></hr>
                <label htmlFor="firstName"><b>Имя</b></label>
                <input type="text" placeholder="Введите имя" name="firstName" required></input>
                <label htmlFor="middleName"><b>Отчество</b></label>
                <input type="text" placeholder="Введите отчество" name="middleName" required></input>
                <label htmlFor="lastName"><b>Фамилия</b></label>
                <input type="text" placeholder="Введите фамилию" name="lastName" required></input>
                <label htmlFor="email"><b>Почта</b></label>
                <input type="text" placeholder="Введите почту" name="email" required></input>
                <label htmlFor="phoneNumber"><b>Номер телефона</b></label>
                <input type="text" placeholder="Введите номер телефона" name="phoneNumber" required></input>
                <hr></hr>
                <label htmlFor="psw"><b>Пароль</b></label>
                <input type="password" placeholder="Введите пароль" name="psw" required></input>

                <label htmlFor="psw-repeat"><b>Повторите пароль</b></label>
                <input type="password" placeholder="Повторите пароль" name="psw-repeat" required></input>
                <hr></hr>

                <p>Создавая аккаунт, вы соглашаетесь с <a href="#">Политикой конфиденциальности</a>.</p>
                <button type="submit" className="registerbtn" onClick={reg}>Зарегистрироваться</button>
            </div>

            <div className="container signin">
                <p>Уже есть аккаунт? <a href={host + 'login'}>Войти</a>.</p>
            </div>
        </form>
    );

}