import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const auth = AUTH;

    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigate('/admin'); // Redirection vers AdminScreen après inscription réussie
        } catch (error) {
            console.log(error);
        }
    };

    const signUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigate('/admin'); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='loginContainer'>
            <h1>Login</h1>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button onClick={signIn} style={{ color: "white", backgroundColor: "black-grey"}}>Connexion</button>
            <button onClick={signUp} style={{ color: "white", backgroundColor: "black-grey"}}>Créer un compte</button>
        </div>
    );
}
