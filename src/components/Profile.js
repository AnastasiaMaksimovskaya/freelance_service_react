import axiosInstance from "./AxiosInstance";
import {user} from "../App";
import {useEffect, useState} from "react";
import "./Profile.css";

export default function Profile(props) {

    const [responseUser, setUser] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(`http://localhost:8080/client/getInfo?id=` + user.id).then(r => {
                alert(r)
            if (r !== undefined && r.data !== undefined) {
                setUser(r.data.object)
            }
        });
    }, [])

    return (

        <div className="profile-container">
            <div className="profile-content">
                <div className="photo">
                    {!responseUser.photo && <div className="default-photo">{responseUser.firstName.charAt(0)}</div> }
                    <form className="add-photo" encType="multipart/form-data" method="post">
                        <input type="file" name="f"/>
                            <input type="submit" value="Отправить"/>
                    </form>
                </div>
                <div className="personal-data">
                    <div className="personal-para"><img src={require("../img/personal data.png")}/>Персональная
                        информация
                    </div>
                    <div>Имя: {responseUser.firstName}</div>
                    <div>Фамилия: {responseUser.lastName}</div>
                    <div>Отчество: {responseUser.middleName}</div>
                </div>
                <div className="personal-contacts">
                    <div className="personal-para"><img src={require("../img/contacts.png")}/>Контактная информация
                    </div>
                    <div>Почта: {responseUser.email}</div>
                    {responseUser.phoneNumber && (<div>Номер телефона: {responseUser.phoneNumber}</div>)}</div>
                <div className="profile-created">
                    Зарегистрирован: {responseUser.created}</div>
            </div>
            <div className="add-info">
                <div className="edit-block">
                    <button className="purple">Редактировать профиль</button>
                    <button className="purple">Изменить пароль</button>
                </div>
                <div className="personal-actions">
                    <h2>Последняя активность</h2>
                </div>
            </div>
        </div>
)

}