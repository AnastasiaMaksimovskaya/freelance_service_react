import axios from "axios";
import React, {useState} from "react";
import Swal from "sweetalert2";
import Modal from "./Modal";
import Login from "./Login";
import {useNavigate} from "react-router-dom";

const axiosInstance = axios.create({
    withCredentials: true
});


const AxiosInterceptor = ({children}) => {

    const [stateModal, setStateModal] = useState(false);
    const navigate = useNavigate();

    const closeModal = () => setStateModal(false);

    const modalContent = (
        <div>
            <div className="login-modal modal">
                <button className="transparent-button align-right" onClick={
                    function () {
                        closeModal()
                        navigate('/')
                    }}>x
                </button>
                <Login origin='fromModal' onSuccess={function () {
                    closeModal()
                }}/>
            </div>
        </div>
    );

    const resInterceptor = response => {
        if (response.data.status === 401) {
            setStateModal(true)
        }
        if (response.data.status === 'error') {
            if (response.data.message === 'globalException') {
                Swal.fire({
                    title: response.data.message,
                    timer: 2000,
                    showConfirmButton: false,
                })
            }
            return;
        }
        return response
    }
    const errInterceptor = error => {
        if (error.response.status === 401) {
            setStateModal(true)
        } else if (error.response.status >= 500) {
            Swal.fire({
                title: 'Что-то пошло не так, \n повторите ваш запрос позже',
                timer: 2000,
                showConfirmButton: false,
            })
        }
        return error;
    }

    axiosInstance.interceptors.response.use(resInterceptor, errInterceptor);

    return stateModal ? <Modal children={modalContent}></Modal> : children;
}

export default axiosInstance;
export {AxiosInterceptor}