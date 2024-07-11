import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import decorationImage from "../assets/decoration.svg";

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname.split("/")[1];

    const handleNavigation = (to) => {
        navigate("/");
        setTimeout(() => {
            scroll.scrollTo(document.getElementById(to).offsetTop);
        }, 0);
    };

    return (
        <>
            <div className="home-hero-header">
                <div className="top-header">
                    <Link className={pathName === "logowanie" ? "active" : undefined} to="/logowanie">Zaloguj</Link>
                    <Link className={pathName === "rejestracja" ? "active" : undefined} to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="bottom-header">
                    <span onClick={() => handleNavigation("start")}>Start</span>
                    <span onClick={() => handleNavigation("what-it-is-about")}>O co chodzi?</span>
                    <span onClick={() => handleNavigation("about-us")}>O nas</span>
                    <span onClick={() => handleNavigation("organizations")}>Fundacja i organizacje</span>
                    <span onClick={() => handleNavigation("contact")}>Kontakt</span>
                </div>
            </div>
        </>
    );
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
                        <button><Link to="/logowanie">Oddaj rzeczy</Link></button>
                        <button><Link to="/logowanie">Zorganizuj zbiórkę</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
