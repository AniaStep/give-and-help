import React from 'react';
import decorationImage from "../assets/decoration.svg";
import shirtIcon from "../assets/icon-1.svg";
import bagIcon from "../assets/icon-2.svg";
import searchIcon from "../assets/icon-3.svg";
import deliveryIcon from "../assets/icon-4.svg";
import { Link } from "react-router-dom";


export const HomeSimpleSteps = () => {
    return (
        <div className="home-simple-steps-container">
            <p>Wystarczą 4 proste kroki</p>
            <img src={decorationImage} alt=""/>
            <div className="grey-canvas">
                <div className="grey-canvas-el">
                    <img src={shirtIcon} alt=""/>
                    <p>Wybierz rzeczy</p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="grey-canvas-el">
                    <img src={bagIcon} alt=""/>
                    <p>Spakuj je</p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="grey-canvas-el">
                    <img src={searchIcon} alt=""/>
                    <p>Zdecyduj, komu chcesz pomóc</p>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="grey-canvas-el">
                    <img src={deliveryIcon} alt=""/>
                    <p>Zamów kuriera</p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button><Link to="logowanie">Oddaj rzeczy</Link></button>
        </div>
    )
}