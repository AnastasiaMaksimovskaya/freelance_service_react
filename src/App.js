import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {useEffect, useState} from "react";
import ClientRegistration from "./components/ClientRegistration";
import PerformerRegistration from "./components/PerformerRegistration";

function App() {

    const [role, setRole ] = useState('client')

        if (role === 'client') {
            return <><NavBar/><ClientRegistration changeRoleClient = {setRole} current = {role}/></>
        }
        else if (role === 'performer') {
            return <><NavBar/><PerformerRegistration changeRolePerformer = {setRole} current = {role}/></>
        }
    }


export default App;
