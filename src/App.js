import './App.css';
import NavBar from "./components/NavBar";
import ClientRegistration from "./components/ClientRegistration";
import PerformerRegistration from "./components/PerformerRegistration";
import RegPopup from "./components/RegPopup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Profile from "./components/Profile";
import React from "react";
import RoleRoute from "./components/RoleRouter";
import {LoadingProvider} from "./components/LoaderProvider";

export const host = 'http://localhost:3000/';
export let user;

function App() {

    const anyRole = ['PERFORMER', 'CLIENT']

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    user = parseJwt(localStorage.getItem('jwt'))

    const role = 'client'

    return (
        <LoadingProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<NavBar/>}/>
                    <Route path="auth/popup" element={<RegPopup current={role}/>}/>
                    <Route path="/orders" element={<><NavBar/><Orders/></>}/>
                    <Route path="client/reg"
                           element={<><NavBar/><ClientRegistration current={role}/></>}/>
                    <Route path="login"
                           element={<Login/>}/>
                    <Route path="profile"
                           element={<><NavBar/><RoleRoute
                                               roles={anyRole}
                                               component={<Profile/>}></RoleRoute></>}/>
                    <Route path="performer/reg"
                           element={<><NavBar/><PerformerRegistration current={role}/></>}/>
                </Routes>
            </BrowserRouter>
        </LoadingProvider>
    )
}

export default App;
