import React from 'react';
import decorationImage from "../assets/decoration.svg";


export const HomeAboutUs = () => {
    return (
        <div id="about-us">
            <div className="about-us-text">
                <p>O nas</p>
                <img src={decorationImage} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur id, natus nihil pariatur reprehenderit. Aliquam architecto aut dolor nulla obcaecati quaerat, quam quas quasi!</p>
            </div>
            <div className="about-us-image"></div>
        </div>
    )
}