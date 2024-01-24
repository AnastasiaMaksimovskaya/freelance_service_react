

import { Input } from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
    email_validation,
    password_validation,
    first_name_validation,
    last_name_validation,
    middle_name_validation,
    phone_validation,
    password_repeat_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import axiosInstance from "./AxiosInstance";
import {backHost} from "../App";

export const Registration = (props) => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)

    const userRole = props.current;
    const onSubmit = methods.handleSubmit(data => {
        methods.reset()
        setSuccess(true)
    })

    function reg(event) {
        if (success) {
            event.preventDefault();
            const userData = {
                "firstName": event.target.form.elements.firstName.value,
                "lastName": event.target.form.elements.lastName.value,
                "login": event.target.form.elements.email.value,
                "middleName": event.target.form.elements.middleName.value,
                "password": event.target.form.elements.psw.value,
                "phoneNumber": event.target.form.elements.phoneNumber.value,
                "role": userRole === 'client' ? 'CLIENT' : 'PERFORMER'

            };
            axiosInstance
                .post(backHost + userRole + `/reg`, userData)
                .then(() => {
                        window.location.href = ''
                    }
                )
            ;
        }
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                autoComplete="off"
                className="container"
            >
                <div>
                    <Input {...first_name_validation} />
                    <Input {...last_name_validation} />
                    <Input {...middle_name_validation} />
                    <Input {...phone_validation} />
                    <Input {...email_validation} />
                    <hr></hr>
                    <Input {...password_validation} />
                    <Input {...password_repeat_validation(document.getElementById("password") ? document.getElementById("password").value : '')} />
                </div>
                {success && (
                    <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                        <BsFillCheckSquareFill /> Неверно введены данные
                    </p>
                )}
                <p>Создавая аккаунт, вы соглашаетесь с <a href="#">Политикой конфиденциальности</a>.</p>
                <button type="submit" className="registerbtn" onClick={(e) => {
                    onSubmit()
                    reg(e);
                }}>Зарегистрироваться </button>
            </form>
        </FormProvider>
    )
}
