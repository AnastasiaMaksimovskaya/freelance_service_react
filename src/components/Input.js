import {findInputError, isFormInvalid} from './utils'
import {useFormContext} from 'react-hook-form'
import {AnimatePresence, motion} from 'framer-motion'
import {MdError} from 'react-icons/md'
import React, {useState} from "react";

export const Input = ({
                          name,
                          label,
                          type,
                          id,
                          placeholder,
                          validation,
                          multiline,
                      }) => {
    const {
        register,
        formState: {errors},
    } = useFormContext()

    const [showPass, setShowPass] = useState(false);


    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)

    const password = document.getElementById("password");
    const password_rpt = document.getElementById("password-rpt");

    function show() {
        if (password.getAttribute('type') === 'password') {
            password.removeAttribute('type');
            password.setAttribute('type', 'text');
            password_rpt.removeAttribute('type');
            password_rpt.setAttribute('type', 'text');
            setShowPass(true);
        } else {
            password.removeAttribute('type');
            password.setAttribute('type', 'password');
            password_rpt.removeAttribute('type');
            password_rpt.setAttribute('type', 'password');
            setShowPass(false);
        }
    }

    return (
        <div>
            <div>
                <label htmlFor={id}>
                    {label}
                    {('required' in validation) && <span style={{color: "red"}}> *</span>}
                </label>
                <AnimatePresence mode="wait" initial={false}>
                    {isInvalid && (
                        <InputError
                            message={inputErrors.error.message}
                            key={inputErrors.error.message}
                        />
                    )}
                </AnimatePresence>
            </div>
            {multiline ? (
                <textarea
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                ></textarea>
            ) : (
                <p className="input-container">
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        {...register(name, validation)}
                    /> {id === 'password' && <button id="show" onClick={show} style={{backgroundColor: "transparent",
                    border: "none"}} className="eye">{showPass ? <img src={require("../img/open.png")}/> : <img src={require("../img/closed.png")}/>}</button>}</p>
            )}
        </div>
    )
}

const InputError = ({message}) => {
    return (
        <motion.p
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
        >
            <MdError/>
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 10},
    transition: {duration: 0.2},
}
