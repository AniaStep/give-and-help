import React from 'react';
import { useForm } from 'react-hook-form';
import decorationImage from "../assets/decoration.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";

export const HomeContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div id="contact">
            <div className="contact-overlay">
                <div className="contact-content">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <div className="contact-form-intro">
                            <p>Skontaktuj się z nami</p>
                            <img src={decorationImage} alt=""/>
                        </div>
                        <div className="contact-form-top">
                            <div className="contact-form-field">
                                <label>Wpisz swoje imię</label>
                                <input
                                    type="text"
                                    placeholder="Krzysztof"
                                    {...register('name', {required: 'Imię jest wymagane'})}
                                />
                                {errors.name && <p className="error">{errors.name.message}</p>}
                            </div>
                            <div className="contact-form-field">
                                <label>Wpisz swój email</label>
                                <input
                                    type="email"
                                    placeholder="abc@xyz.pl"
                                    {...register('email', {
                                        required: 'Email jest wymagany',
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: 'Nieprawidłowy format email'
                                        }
                                    })}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="contact-form-bottom">
                            <div className="contact-form-field">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea
                                    rows="4"
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis enim et impedit ipsa iusto labore minus nemo obcaecati odit officia placeat possimus quia, reprehenderit sed sequi, suscipit ut voluptas!"
                                    {...register('message', {required: 'Wiadomość jest wymagana'})}
                                />
                                {errors.message && <p className="error">{errors.message.message}</p>}
                            </div>
                        </div>
                        <button type="submit">Wyślij</button>
                    </form>
                    <div className="contact-footer">
                        <div className="footer-left">Copyright by Coders Lab</div>
                        <div className="footer-right">
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
        </div>
    );
};
