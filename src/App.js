import './App.css';
import NavBar from "./components/NavBar";
import ClientRegistration from "./components/ClientRegistration";
import PerformerRegistration from "./components/PerformerRegistration";
import RegPopup from "./components/RegPopup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Orders from "./components/Orders";
import Login from "./components/Login";

export const host = 'http://localhost:3000/';

function App() {
    const role = 'client'

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<NavBar/>}/>
                    <Route path="auth/popup" element={<RegPopup current={role}/>}/>
                    <Route path="/orders" element={<><NavBar/><Orders/></>}/>
                    <Route path="client/reg"
                           element={<><NavBar/><ClientRegistration current={role}/></>}/>
                    <Route path="login"
                           element={<Login/>}/>
                    <Route path="performer/reg"
                           element={<><NavBar/><PerformerRegistration current={role}/></>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default App;
