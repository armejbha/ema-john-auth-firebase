import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='main-container'>
            <div className='shadow-container'></div>
            <div className='form-container'>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleSignIn}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">password</label>
                            <input onBlur={handlePassword} type="password" name="Password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>loading...</p>
                        }
                        <input className='btn-submit' type="submit" value="Login" />
                    </form>
                    <p className='exta-link'>
                        New to Ema-john?<Link to='/signup'>Create New Account</Link>
                    </p>
                    <div className='bar'>
                        <div className='bar-line'></div>
                        <p>Or</p>
                        <div className='bar-line'></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;