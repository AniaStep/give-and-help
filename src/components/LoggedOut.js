import React from 'react';
import { Header } from "./HomeHeader";
import decorationImage from "../assets/decoration.svg";
import { Link } from "react-router-dom";

export const LoggedOut = () => {
    return (
        <div>
            <Header/>
            <div className="loggedOut-container">
                <div className="loggedOut-title">
                    <p>Wylogowanie nastapiło pomyślnie!</p>
                    <img src={decorationImage} alt=""/>
                </div>
                <button><Link to="/">Strona główna</Link></button>
            </div>
        </div>
    )
}