import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from "./HomeHeader";
import decorationImage from "../assets/decoration.svg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { errorsPL } from "../firebase/errors-dictionary";

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        if (data.password !== data.password2) {
            setError('Hasła się nie zgadzają.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            navigate(`/oddaj-rzeczy`);
        } catch (err) {
            setError(errorsPL[err.code] || 'Wystąpił błąd podczas rejestracji.');
            console.error(err);
        }
    };

    return (
        <div>
            <Header/>
            <div className="register-container">
                <div className="register-title">
                    <p>Załóż konto</p>
                    <img src={decorationImage} alt=""/>
                </div>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="register-form-fields">
                        <div className="register-form-field">
                            <label>Email</label>
                            <input
                                type="email"
                                {...register('email', {required: true})}
                            />
                            {errors.email && <p className="error">Email jest wymagany.</p>}
                        </div>
                        <div className="register-form-field">
                            <label>Hasło</label>
                            <input
                                type="password"
                                {...register('password', {required: true})}
                            />
                            {errors.password && <p className="error">Hasło jest wymagane.</p>}
                        </div>
                        <div className="register-form-field">
                            <label>Powtórz hasło</label>
                            <input
                                type="password"
                                {...register('password2', {required: true})}
                            />
                            {errors.password2 && <p className="error">Powtórzenie hasła jest wymagane.</p>}
                        </div>
                    </div>
                    <div className="error error-below-form">
                        {error}
                    </div>
                    <div className="register-buttons">
                        <button type="button"><Link to="/logowanie">Zaloguj się</Link></button>
                        <button type="submit">Załóż konto</button>
                    </div>
                </form>

            </div>
        </div>
    );
};
