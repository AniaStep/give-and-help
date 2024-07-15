import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/main.scss";
import { AuthProvider } from "./firebase/auth-provider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);