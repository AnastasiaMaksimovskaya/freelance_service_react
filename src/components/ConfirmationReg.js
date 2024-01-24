import './Auth.css'
import React, {useState} from "react";
import {backHost} from "../App";
import axiosInstance from "./AxiosInstance";
import {userContext} from "./context/userContext";
import { useParams } from "react-router-dom";
export default function ConfirmationReg(props) {
    const [credentialError, setCredentialError] = useState(false);
    const params= useParams()
    const role = params.role;
    function confirmReq(event, onSuccess, setCurrentUser) {
        event.preventDefault();
        const userData = {
            "login" : event.target.form.elements.username.value,
            "password" : event.target.form.elements.password.value,
            "userId" : params.userId
        };
        axiosInstance
            .post(backHost + role + `/submitRegistration`, userData)
            .then(r => {
                if (r.data.code === 401) {
                    setCredentialError(true);
                } else {
                    setCurrentUser(r.data.object)
                    setCredentialError(false);
                    onSuccess();
                }
            })
    }

    return (
        <userContext.Consumer>
            {({user,setCurrentUser}) => {
                return (
                    <form>
                        <div className="container container-login">
                            <h2>Войти</h2>
                            <label htmlFor="username">Почта</label>
                            <input type="text" id="username" name="username" placeholder="Введите почту"
                                   required={true} autoFocus=""
                                   style={{border: credentialError ? '1px solid #AD4343FF' : 'none'}}></input>
                            <label htmlFor="password" className="sr-only">Пароль</label>
                            <input type="password" id="password" name="password"
                                   placeholder="Введите пароль" required={true}
                                   style={{border: credentialError ? '1px solid #AD4343FF' : 'none'}}></input>
                            <button className="registerbtn" type="submit" onClick={(e) => {
                                confirmReq(e, props.onSuccess, setCurrentUser)
                            }}>Войти
                            </button>
                        </div>
                    </form>
                )
            }}
        </userContext.Consumer>
    )
}
