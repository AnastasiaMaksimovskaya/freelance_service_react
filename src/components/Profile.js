import axiosInstance from "./AxiosInstance";
import {backHost, user} from "../App";
import {useEffect, useState} from "react";
import "./Profile.css";
import {useLoading} from "./LoaderProvider";
import Loader from "./Loader";

export default function Profile() {

    const [responseUser, setUser] = useState([]);

    useEffect(() => {
        var rolePath;
        if (user) {
            if (user.role === 'PERFORMER') {
                rolePath = 'performer'
            } else if (user.role === 'CLIENT') {
                rolePath = 'client'
            }

            axiosInstance
                .get(backHost + rolePath + `/getInfo`).then(r => {
                if (r !== undefined && r.data !== undefined) {
                    setUser(r.data.object)
                }
            });
        }
    }, [setUser])

    const { loading, setLoading } = useLoading();
    if (!responseUser || responseUser.length === 0) {
        setLoading(true)
        return (
            (loading && <Loader></Loader>)
    );
    }
    setLoading(false)

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
                    {responseUser.middleName && <div> Отчество: {responseUser.middleName}</div>}
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