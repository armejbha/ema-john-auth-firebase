import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmed, setComfirmed] = useState('');
    const [error, setError] = useState('');
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
    const handleSubmit = event => {
        event.preventDafault();
        if (password !== comfirmed) {
            setError('Your password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password shot')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>SignUp</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="comfirmed password">Comfirmed Password</label>
                        <input onBlur={handleComfirmedBlur} type="password" name="password" id="" required />
                    </div>
                    <p>{error}</p>
                    <input className='input-button' type="submit" value="Login" />
                </form>
                <p className='link-text'>
                    Already Have an Account <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;