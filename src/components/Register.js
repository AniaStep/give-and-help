import React from 'react';
import { Header } from "./HomeHeader";
import decorationImage from "../assets/decoration.svg";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div>
            <Header/>
            <div className="register-container">
                <div className="register-title">
                    <p>Załóż konto</p>
                    <img src={decorationImage} alt=""/>
                </div>
                <form className="register-form">
                    <div className="register-form-field">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="register-form-field">
                        <label>Hasło</label>
                        <input type="text"/>
                    </div>
                    <div className="register-form-field">
                        <label>Powtórz hasło</label>
                        <input type="text"/>
                    </div>
                </form>
                <div className="register-buttons">
                    <button><Link to="/logowanie">Zaloguj się</Link></button>
                    <button><Link to="/rejestracja">Załóż konto</Link></button>
                </div>
            </div>
        </div>
    )
}