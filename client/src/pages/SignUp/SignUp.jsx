import axios from 'axios'
import Input from '../../components/Input/Input'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
import '../SignUp/signUp.scss'
import '../../components/Input/input.scss'


function SignUp(props) {
    const [isOpen, setIsOpen] = useState(false)
    const togglePopUp = () => {
        setIsOpen(!isOpen)
    }
    const handleSignUp = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:8080/users/register`, {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            username: e.target.username.value,
            password: e.target.password.value,
            searchRadius: e.target.searchRadius.value,
            animalType: e.target.animalType.value,
            breed: e.target.breed.value,
            age: e.target.age.value
        })
        .then(res => {
            props.history.push('/results')
        })
    }
    return (
        <div className="signup-popup">
            <h1 className="signup-popup__header">Sign Up!</h1>
            <div className="signup-popup__wrapper">
                <form onSubmit={handleSignUp} className="signup-popup__form">
                    <Input label="First Name" name="firstName" type="text" />
                    <Input label="Last Name" name="lastName" type="text" />

                    <Input label="Username" name="username" type="text" />
                    <Input label="Password" name="password" type="password" />

                    <Input label="Search Radius" name="searchRadius" type="text" />
                    <Input label="Animal Type" name="animalType" type="text" />
                    <Input label="Breed" name="breed" type="text" />
                    <Input label="Age" name="age" type="text" />


                    <Link to ="/results">
                    <button type="submit">Sign Up!</button>
                    </Link>
                </form>

            <Login />
            </div>
        </div>
    )
}

export default SignUp
