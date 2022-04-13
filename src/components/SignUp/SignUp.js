import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmed, setComfirmed] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleComfirmedBlur = event => {
        setComfirmed(event.target.value);
    }
    if (user) {
        navigate('/shop');
        return;
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (password !== comfirmed) {
            setError('Your password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Your password length under Six');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='main-container'>
            <div className='shadow-container'></div>
            <div className='form-container'>
                <div>
                    <h1>SignUP</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="Comfirmed  password">Comfirmed Password</label>
                            <input onBlur={handleComfirmedBlur} type="password" name="Comfirmed Password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='btn-submit' type="submit" value="Login" />
                    </form>
                    <p className='exta-link'>
                        Already Have an Account?<Link to='/login'>Login</Link>
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

export default SignUp;