export const first_name_validation = {
    name: 'firstname',
    label: 'Имя',
    type: 'text',
    id: 'firstname',
    placeholder: 'Введите имя',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле',
        },
        maxLength: {
            value: 30,
            message: 'Имя не может быть больше 30 символов',
        },
    },
}
export const last_name_validation = {
    name: 'lastname',
    label: 'Фамилия',
    type: 'text',
    id: 'lastname',
    placeholder: 'Введите фамилию',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле',
        },
        maxLength: {
            value: 30,
            message: 'Фамилия не может быть больше 30 символов',
        },
    },
}
export const middle_name_validation = {
    name: 'middlename',
    label: 'Отчество',
    type: 'text',
    id: 'middlename',
    placeholder: 'Введите отчество',
    validation: {
        maxLength: {
            value: 30,
            message: 'Отчество не может быть больше 30 символов',
        },
    },
}


export const password_validation = {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    id: 'password',
    placeholder: 'Введите пароль',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле',
        },
        minLength: {
            value: 6,
            message: 'Пароль должен содержать не менее 6 символов',
        },
    },
}

export function password_repeat_validation(password) {
    return {
        name: 'password-rpt',
        label: 'Повторите пароль',
        type: 'password',
        id: 'password-rpt',
        placeholder: 'Повторите пароль',
        validation: {
            required: {
                value: true,
                message: 'Обязательное поле',
            },
            validate: (val) => {
                if (document.getElementById("password") && document.getElementById("password").value !== val) {
                    return "Пароли не совпадают";
                }
            },
        },
    }
}


export const email_validation = {
    name: 'email',
    label: 'Почта',
    type: 'email',
    id: 'email',
    placeholder: 'Введите адрес почты',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле',
        },
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неверный формат ввода',
        },
    },
}

export const phone_validation = {
    name: 'phone',
    label: 'Номер телефона',
    type: 'tel',
    id: 'phone',
    placeholder: 'Введите номер телефона',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле',
        },
        pattern: {
            value:
                /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            message: 'Неверный формат ввода',
        },
    },
}
