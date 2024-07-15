import React, { useState } from "react";
import { Header } from "./HomeHeader";
import decorationImage from "../assets/decoration.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Dictionary of errors in Polish
    const errorsPL = {
        'auth/invalid-email': 'Nie wpisano emaila lub email jest niepoprawny.',
        'auth/invalid-credential': 'Email lub hasło jest niepoprawne.',
    };

    // Function for signing in
    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(`/oddaj-rzeczy`);
        } catch (err) {
            setError(errorsPL[err.code] || 'Wystąpił błąd podczas logowania.');
            console.error(err);
        }
    }

    // Enabling signing in by using Enter
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            signIn();
        }
    };

    return (
        <div>
            <Header/>
            <div className="login-container">
                <div className="login-title">
                    <p>Zaloguj się</p>
                    <img src={decorationImage} alt=""/>
                </div>
                <form className="login-form">
                    <div className="login-form-field">
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div className="login-form-field">
                        <label>Hasło</label>
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                </form>
                <div style={{ color: "red", height: "20px" }}>
                    {error}
                </div>
                <div className="login-buttons">
                    <button><Link to="/rejestracja">Załóż konto</Link></button>
                    <button onClick={signIn}><Link to="/logowanie">Zaloguj się</Link></button>
                </div>
            </div>
        </div>
    )
}