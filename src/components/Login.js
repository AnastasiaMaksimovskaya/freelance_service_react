import './Auth.css'
import React, {useState} from "react";
import {backHost, host} from "../App";
import axiosInstance from "./AxiosInstance";

export default function Login(props) {
    const [credentialError, setCredentialError] = useState(false);


    function loginReq (event, onSuccess) {
        event.preventDefault();
        const userData = {
            "login": event.target.form.elements.username.value,
            "password": event.target.form.elements.password.value
        };
        console.log(axiosInstance.defaults.headers.common["freelance"])
        delete axiosInstance.defaults.headers.common["freelance"];
        axiosInstance
            .post(backHost + `auth/login`, userData)
            .then(r => {
                if (r.data.code === 401) {
                    setCredentialError(true);
                } else {
                    setCredentialError(false);
                    onSuccess();
                }
            })
    }

    return (
        <form>
            <div className="container container-login">
                <h2>Войти</h2>
                <label htmlFor="username">Почта</label>
                <input type="text" id="username" name="username" placeholder="Введите почту"
                       required={true} autoFocus="" style={{border : credentialError ? '1px solid #AD4343FF' : 'none' }}></input>
                <label htmlFor="password" className="sr-only">Пароль</label>
                <input type="password" id="password" name="password"
                       placeholder="Введите пароль" required={true} style={{border : credentialError ? '1px solid #AD4343FF' : 'none' }}></input>
                <button className="registerbtn" type="submit" onClick={(e) => {loginReq(e, props.onSuccess)}}>Войти</button>
                <div className="container signin">
                    <p>Нет аккаунта? <a href={host + 'client/reg'}>Зарегистрироваться</a>.</p>
                </div>
            </div>
        </form>)
}
