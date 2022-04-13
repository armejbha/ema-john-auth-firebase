import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipping.css'
const Shipping = () => {
    const [name, setName] = useState('');
    const [user] = useAuthState(auth);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        const shipping = { name, user, phone, address };
        console.log(shipping);
    }
    return (
        <div className='form-container1'>
            <div>
                <h1>Shipping Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Comfirmed  password">Phone</label>
                        <input onBlur={handlePhoneBlur} type="phone" name="phone" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;