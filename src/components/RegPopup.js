import React, {Component, useState} from 'react';
import 'reactjs-popup/dist/index.css';
import './RegPopup.css'
import App, {host} from "../App";

export default function RegPopup (props) {
    return (<div>
        <div className="b-popup">
            <div className="b-popup-content">
                Вам необходимо войти/зарегистрироваться
                <div className="suggestion">
                    <div className="suggestion-link"><a href={host + props.current + '/reg'}>Зарегистрироваться</a></div>
                    <div className="suggestion-link"><a href={host + 'login'}>Войти</a></div>
                </div>
            </div>
        </div>
    </div>)
}