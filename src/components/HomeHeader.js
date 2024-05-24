import React from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import decorationImage from "../assets/decoration.svg";

export const HomeHeader = () => {
    return (
        <div id="start">
            <div className="home-hero-image"></div>
            <div>
                <div className="top-header">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="bottom-header">
                    <ScrollLink to="start">Start</ScrollLink>
                    <ScrollLink to="what-it-is-about">O co chodzi?</ScrollLink>
                    <ScrollLink to="about-us">O nas</ScrollLink>
                    <ScrollLink to="organizations">Fundacja i organizacje</ScrollLink>
                    <ScrollLink to="contact">Kontakt</ScrollLink>
                </div>
                <div className="home-hero-text">
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={decorationImage} alt=""/>
                    <div className="home-hero-buttons">
                        <button><Link to="logowanie">Oddaj rzeczy</Link></button>
                        <button><Link to="logowanie">Zorganizuj zbiórkę</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}