import React from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import decorationImage from "../assets/decoration.svg";


export const Header = () => {
    return (
        <>
            <div className="home-hero-header">
                <div className="top-header">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="bottom-header">
                    <ScrollLink to="start"><Link to="/">Start</Link></ScrollLink>
                    <ScrollLink to="what-it-is-about"><Link to="/">O co chodzi?</Link></ScrollLink>
                    <ScrollLink to="about-us"><Link to="/">O nas</Link></ScrollLink>
                    <ScrollLink to="organizations"><Link to="/">Fundacja i organizacje</Link></ScrollLink>
                    <ScrollLink to="contact"><Link to="/">Kontakt</Link></ScrollLink>
                </div>
            </div>
        </>
    )
}

export const HomeHeader = () => {
    return (
        <div id="start">
            <div className="home-hero-image"></div>
            <div className="home-hero-content">
               <Header/>
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