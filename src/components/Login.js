import './Auth.css'
import React from "react";
import {host} from "../App";
import axios from "axios";

export default function Login() {

    return (
        <form>
            <div className="container container-login">
                <h2>Войти</h2>
                <label htmlFor="username">Почта</label>
                <input type="text" id="username" name="username" placeholder="Введите почту"
                       required="" autoFocus=""></input>
                <label htmlFor="password" className="sr-only">Пароль</label>
                <input type="password" id="password" name="password"
                       placeholder="Введите пароль" required=""></input>
                <button className="registerbtn" type="submit" onClick={login}>Войти</button>
                <div className="container signin">
                    <p>Нет аккаунта? <a href={host + 'client/reg'}>Зарегистрироваться</a>.</p>
                </div>
            </div>
        </form>)
}

function login(event) {
    event.preventDefault();
    const userData = {
        "login": event.target.form.elements.username.value,
        "password": event.target.form.elements.password.value
    };
    console.log(userData)
    axios
        .post(`http://localhost:8080/auth/login`, userData)
        .then()
    ;
}