import React from 'react';
import decorationImage from "../assets/decoration.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";

export const HomeContact = () => {
    return (
        <div id="contact">
            <div className="contact-overlay">
                <div className="contact-content">
                    <div className="contact-form-intro">
                        <p>Skontaktuj się z nami</p>
                        <img src={decorationImage} alt=""/>
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-top">
                            <div className="contact-form-field">
                                <label>Wpisz swoje imię</label>
                                <input type="text" placeholder="Krzysztof"/>
                            </div>
                            <div className="contact-form-field">
                                <label>Wpisz swój email</label>
                                <input type="email" placeholder="abc@xyz.pl"/>
                            </div>
                        </div>
                        <div className="contact-form-bottom">
                            <div className="contact-form-field">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea rows="4"
                                       placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis enim et impedit ipsa iusto labore minus nemo obcaecati odit officia placeat possimus quia, reprehenderit sed sequi, suscipit ut voluptas!"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-footer">
                    <div className="footer-left">Copyright by Coders Lab</div>
                    <div className="footer-right">
                        <button>Wyślij</button>
                        <div className="social-media">
                            <a href="https://www.facebook.com/">
                                <img src={facebookIcon} alt="Facebook"/>
                            </a>
                            <a href="https://www.instagram.com/">
                            <img src={instagramIcon} alt="Instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}