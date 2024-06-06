import React from 'react';
import { Header } from "./HomeHeader";
import decorationImage from "../assets/decoration.svg";
import { Link } from "react-router-dom";

export const Login = () => {
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
                        <input type="email"/>
                    </div>
                    <div className="login-form-field">
                        <label>Hasło</label>
                        <input type="text"/>
                    </div>
                </form>
                <div className="login-buttons">
                    <button><Link to="/rejestracja">Załóż konto</Link></button>
                    <button><Link to="/logowanie">Zaloguj się</Link></button>
                </div>
            </div>
        </div>
    )
}