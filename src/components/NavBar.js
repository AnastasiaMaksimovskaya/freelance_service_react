import React, {useState} from 'react';
import './NavBar.css'
import Login from "./Login";
import Modal from './Modal';
import {host} from "../App";

export default function NavBar() {

    const [stateModal, setStateModal] = useState(false);
    const openModal = () => setStateModal(true);
    const closeModal = () => setStateModal(false);

    const modalContent = (
        <div>
            <div className="login-modal modal">
                <button className="transparent-button align-right">x</button>
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
                {stateModal && <Modal children={modalContent} onClick={closeModal}></Modal>}
            </div>
            <div><a href={host + 'client/reg'}><img src={require("../img/setings.png")}/></a></div>
        </nav>
    )
}