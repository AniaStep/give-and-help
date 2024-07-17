import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Header } from "./HomeHeader";
import decorationImage from "../assets/decoration.svg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { errorsPL } from "../firebase/errors-dictionary";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate(`/oddaj-rzeczy`);
        } catch (err) {
            setError(errorsPL[err.code] || 'Wystąpił błąd podczas logowania.');
            console.error(err);
        }
    }

    return (
        <div>
            <Header/>
            <div className="login-container">
                <div className="login-title">
                    <p>Zaloguj się</p>
                    <img src={decorationImage} alt=""/>
                </div>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-form-fields">
                        <div className="login-form-field">
                            <label>Email</label>
                            <input
                                type="email"
                                {...register('email', {required: true})}
                            />
                            {errors.email && <p className="error">Email jest wymagany.</p>}
                        </div>
                        <div className="login-form-field">
                            <label>Hasło</label>
                            <input
                                type="password"
                                {...register('password', {required: true})}
                            />
                            {errors.password && <p className="error">Hasło jest wymagane.</p>}
                        </div>
                    </div>
                    <div className="error error-below-form">
                        {error}
                    </div>
                    <div className="login-buttons">
                        <button type="button"><Link to="/rejestracja">Załóż konto</Link></button>
                        <button type="submit">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
