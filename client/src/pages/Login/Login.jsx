import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input'

function Login(props) {

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login-field">
            <h1 className="login-popup__header">Sign Up!</h1>
            <div className="login-popup__wrapper">
                <form className="login-popup__form">
                    <Input label="Username" name="username" type="text" />
                    <Input label="Password" name="password" type="password" />
                    <button type="submit">Log In</button>
                </form>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Login
