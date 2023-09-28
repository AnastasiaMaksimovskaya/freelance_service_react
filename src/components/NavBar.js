import React, {Component, useState} from 'react';
import './NavBar.css'
import Login from "./Login";
import Modal from 'react-modal';
import {host} from "../App";

export default function NavBar(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const modalContent = (
        <div>
            <div>
                <button className="transparent-button align-right" onClick={closeModal}>x</button>
                <Login/>
            </div>
        </div>
    );
    return (
        <nav>
            <div><a href="client/reg"><img className="logo" src={require("../img/logo.png")}/></a></div>
            <div className="href-container">
                <div><a href={host + 'orders'}>Задания</a></div>
                <div><a href="#">Фрилансеры</a></div>
            </div>
            <div>
                <button className="transparent-button" onClick={openModal}><img src={require("../img/user.png")}/>
                </button>
                <Modal className="login-modal modal" isOpen={modalIsOpen}>
                    {modalContent}
                </Modal>
            </div>
            <div><a href={host + 'client/reg'}><img src={require("../img/setings.png")}/></a></div>
        </nav>
    )
}