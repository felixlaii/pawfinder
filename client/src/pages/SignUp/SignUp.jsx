import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'

function SignUp(props) {
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log({
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value
        })

        axios.post(`http://localhost:8080/users/register`, {
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value
        })
        .then(res => {
            props.history.push('/login')
        })
    }
    return (
        <div className="signup-popup">
            <h1 className="signup-popup__header">Sign Up!</h1>
            <div className="signup-popup__wrapper">
                <form onSubmit={handleSignUp} className="signup-popup__form">
                    <Input label="Name" name="name" type="text" />
                    <Input label="Username" name="username" type="text" />
                    <Input label="Password" name="password" type="password" />

                    <button type="submit">Sign Up!</button>

                </form>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default SignUp
