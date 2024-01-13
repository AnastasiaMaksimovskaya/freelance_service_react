import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:8080',
    headers: {
        freelance: localStorage.getItem('jwt')
    }
});

axiosInstance.interceptors.response.use( (response) => {
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
    }, (error) => {
        if (error.response.status === 403) {
            window.location.assign('')
            localStorage.removeItem('jwt');
        } else if (error.response.status >= 500) {
            Swal.fire({
                title: 'Что-то пошло не так, \n повторите ваш запрос позже',
                timer: 2000,
                showConfirmButton: false,
            })
        }
    }
)

export default axiosInstance;