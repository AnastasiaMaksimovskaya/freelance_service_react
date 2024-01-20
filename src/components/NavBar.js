import React, {useState} from 'react';
import './NavBar.css'
import Login from "./Login";
import Modal from './Modal';
import {useNavigate} from "react-router-dom";
import SettingsMenu from "./SettingsMenu";

export default function NavBar(props) {

    const [stateModal, setStateModal] = useState(false);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const openModal = () => {
        if (props.user) {
            navigate('/profile')
        }
        setStateModal(true);
    }
    const closeModal = () => setStateModal(false);

    const modalContent = (
        <div>
            <div className="login-modal modal">
                <button className="transparent-button align-right" onClick={closeModal}>x</button>
                <Login origin = 'fromModal' onSuccess = {function () {
                    closeModal()
                }}/>
            </div>
        </div>
    );

    return (
        <nav>
            <div><a href="client/reg"><img className="logo" src={require("../img/logo.png")}/></a></div>
            <div className="href-container">
                <button className="transparent-button navigate" style={{color: "white"}} onClick={() => navigate('/orders')}>Задания
                </button>
                <div><a href="#">Фрилансеры</a></div>
            </div>
            <div>
                <button className="transparent-button" onClick={openModal}><img src={require("../img/user.png")}/>
                </button>
                {!props.user && stateModal && <Modal children={modalContent}></Modal>}
            </div>
            <div><button className="transparent-button" style={{position: "relative"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><img src={require("../img/setings.png")}/>{hover && <SettingsMenu onLogout={() => setHover(false)}></SettingsMenu>}</button></div>
        </nav>
    )
}