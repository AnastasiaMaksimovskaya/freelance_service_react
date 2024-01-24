import './App.css';
import NavBar from "./components/NavBar";
import ClientRegistration from "./components/ClientRegistration";
import PerformerRegistration from "./components/PerformerRegistration";
import RegPopup from "./components/RegPopup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Profile from "./components/Profile";
import React, {useEffect, useState} from "react";
import RoleRoute from "./components/RoleRouter";
import {LoadingProvider} from "./components/providers/LoaderProvider";
import axiosInstance, {AxiosInterceptor} from "./components/AxiosInstance";
import {userContext} from './components/context/userContext';
import ConfirmationReg from "./components/ConfirmationReg";


export const host = 'http://localhost:3000/';

export const backHost = 'http://localhost:8080/';

function App() {

    const anyRole = ['PERFORMER', 'CLIENT']

    const role = 'performer'

    const [user, setUser] = useState(() => {
    });


    useEffect(() => {
        axiosInstance
            .get(backHost + `user/getCurrent`)
            .then(r => {
                if (r.data.object) {
                    setUser(r.data.object);
                }
            })
    }, [])


    function logout() {
        setUser();
    }

    function setUserInfo(userInfo) {
        setUser(userInfo);
    }

    const value = {
        user: user,
        logoutUser: logout,
        setCurrentUser: setUserInfo
    }
    return (
        <userContext.Provider value={value}>
            <LoadingProvider>
                <BrowserRouter>
                    <AxiosInterceptor>
                        <Routes>
                            <Route path="" element={<NavBar user={user}/>}/>
                            <Route path="auth/popup" element={<RegPopup current={role}/>}/>
                            <Route path="/orders" element={<><NavBar user={user}/><Orders/></>}/>
                            <Route path="client/reg"
                                   element={<ClientRegistration current={role}/>}/>
                            <Route path="login"
                                   element={<Login onSuccess={function () {
                                       window.location.href = ''
                                   }}/>}/>
                            <Route path="profile"
                                   element={<><NavBar user={user}/><RoleRoute
                                       roles={anyRole}
                                       component={<Profile user={user}/>}></RoleRoute></>}/>
                            <Route path="performer/reg"
                                   element={<PerformerRegistration
                                       current={role}/>}/>
                            <Route path="confirmRegistration/:role/:userId/:key"
                                   element={<ConfirmationReg onSuccess={function () {
                                       window.location.href = ''
                                   }}/>}></Route>
                        </Routes>
                    </AxiosInterceptor>
                </BrowserRouter>
            </LoadingProvider>
        </userContext.Provider>
    )
}

export default App;
