import React, { Component } from 'react';
import './NavBar.css'
export default class NavBar extends Component {
    render() {
        return(
            <nav className="crumbs">
                <div className="logo"><a href="#">Freelance</a></div>
                <div><a href="#">Задания</a></div>
                <div><a href="#">Мои заказы</a></div>
                <div><a href="#">Профиль</a></div>
                <div><a href="#">Баланс</a></div>
                <div><a href="#">Выйти</a></div>
            </nav>
        )
    }
}