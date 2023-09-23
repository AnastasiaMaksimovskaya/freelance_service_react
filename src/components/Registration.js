import './Registration.css'
import axios from "axios";
import App from "../App";

const Registration = (props) => {
    let userRole = props.current;

    function reg (event)  {
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
        axios
            .post(`http://localhost:8080/` + userRole + `/reg`, userData)
            .then(r => console.log(r))
        ;
    }

    return (
        <form action="http://localhost:8080/user/reg" method="post">
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>
                <label htmlFor="firstName"><b>First name</b></label>
                <input type="text" placeholder="Enter first name" name="firstName" required></input>
                <label htmlFor="middleName"><b>Middle name</b></label>
                <input type="text" placeholder="Enter middle name" name="middleName" required></input>
                <label htmlFor="lastName"><b>Last name</b></label>
                <input type="text" placeholder="Enter last name" name="lastName" required></input>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>
                <label htmlFor="phoneNumber"><b>Phone number</b></label>
                <input type="text" placeholder="Enter phone number" name="phoneNumber" required></input>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                <hr></hr>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" className="registerbtn" onClick={reg}>Register</button>
            </div>

            <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>
    );

}

export default Registration;