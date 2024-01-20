import {userContext} from "./context/userContext";
import './SettingsMenu.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import axiosInstance from "./AxiosInstance";
import {backHost} from "../App";

export default function SettingsMenu(props) {

    const arrSettings = [<button>Настройки</button>];
    const navigate = useNavigate();

    return (
        <userContext.Consumer>
            {({user, logoutUser}) => {
                if (user) {
                    arrSettings.push(<button onClick={() => {
                        logoutUser()
                        axiosInstance
                            .post(backHost + `user/logout`).then(r => {
                        });
                        props.onLogout()
                        navigate('/')
                    }
                    }>Выйти</button>)
                }
                return (
                    <div className="settings-menu-container">{arrSettings}</div>
                )
            }}
        </userContext.Consumer>)
}