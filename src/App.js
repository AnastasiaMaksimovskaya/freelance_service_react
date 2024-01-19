import './App.css';
import NavBar from "./components/NavBar";
import ClientRegistration from "./components/ClientRegistration";
import PerformerRegistration from "./components/PerformerRegistration";
import RegPopup from "./components/RegPopup";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Profile from "./components/Profile";
import React from "react";
import RoleRoute from "./components/RoleRouter";
import {LoadingProvider} from "./components/LoaderProvider";
import {AxiosInterceptor} from "./components/AxiosInstance";

export const host = 'http://localhost:3000/';
export let user;

export const backHost = 'http://localhost:8080/';

function App() {

    const anyRole = ['PERFORMER', 'CLIENT']

    const role = 'client'

    return (
        <LoadingProvider>
                <BrowserRouter>
                    <AxiosInterceptor>
                    <Routes>
                        <Route path="" element={<NavBar/>}/>
                        <Route path="auth/popup" element={<RegPopup current={role}/>}/>
                        <Route path="/orders" element={<><NavBar/><Orders/></>}/>
                        <Route path="client/reg"
                               element={<><NavBar/><ClientRegistration current={role}/></>}/>
                        <Route path="login"
                               element={<Login onSuccess={function () {
                                   window.location.href = ''
                               }}/>}/>
                        <Route path="profile"
                               element={<><NavBar/><RoleRoute
                                   roles={anyRole}
                                   component={<Profile/>}></RoleRoute></>}/>
                        <Route path="performer/reg"
                               element={<><NavBar/><PerformerRegistration current={role}/></>}/>
                    </Routes>
                    </AxiosInterceptor>
                </BrowserRouter>
        </LoadingProvider>
    )
}

export default App;
