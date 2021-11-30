import React from 'react'
import axios from 'axios'
import Input from '../../components/Input/Input'
import './login.scss'

function Login(props) {

    const handleLogin = (e) => {
        e.preventDefault()
    

    axios.post(`http://localhost:8080/users/login`, {
        username: e.target.username.value,
        password: e.target.password.value
    })
    .then(res => {
        let token = res.data.token
        sessionStorage.setItem('authToken', token)
        props.history.push('/')
    })
}

    return (
        <div className="login-popup">
            <h1 className="login-popup__header">Log In</h1>
            <div className="login-popup__wrapper">
                <form onSubmit={handleLogin} className="login-popup__form">
                    <Input label="Username" name="username" type="text" />
                    <Input label="Password" name="password" type="password" />
                    <button type="submit">Log In</button>
                </form>
             
            </div>
        </div>
    )
}

export default Login
