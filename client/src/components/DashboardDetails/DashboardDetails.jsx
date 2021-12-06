import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboardDetails.scss'
import DashboardHero from '../../assets/images/dashboard-hero.jpg'

export default class DashboardDetails extends Component {
    state = {
        userPreferences: [],
        userList: []
    }

     getUserPreferences = (userId) => {
        axios.get(`http://localhost:8080/users/userpreferences/${userId}`)
            .then((response) => { 
                this.setState({
                    userPreferences: response.data[0]
                })
            })
            .catch((error) => (error))
     }

    componentDidMount() { 
        axios.get(`http://localhost:8080/users/allusers`)
            .then((response) => { 
                this.setState({
                    userList: response.data
                })
                const userId = this.props.userId
                this.getUserPreferences(userId)
            })
    }
    render() {
        if(!this.state.userList) return <div><p>"loading..."</p></div>
        return (
            <div className="dashboard-details">
                <div className="dashboard-details__wrapper">
                <div className="dashboard-details__container">
                        <h2 className="dashboard-details__header">Account details</h2>
                        <p className="dashboard-details__info">username: {this.state.userPreferences.username}</p>
                        <p className="dashboard-details__info">first name: {this.state.userPreferences.firstName}</p>
                        <p className="dashboard-details__info">last name: {this.state.userPreferences.lastName}</p>
                    <h2 className="dashboard-details__header">Preferences</h2>
                        <p className="dashboard-details__info">animal type: {this.state.userPreferences.animalType}</p>
                        <p className="dashboard-details__info">animal breed: {this.state.userPreferences.breedType}</p>
                        <p className="dashboard-details__info">animal age: {this.state.userPreferences.age}</p>
                        <p className="dashboard-details__info">search radius: {this.state.userPreferences.searchRadius}</p>
                        <div className="dashboard-details__button">

                            <Link to="/results">
                            <button className="dashboard-details__preferences">view preferences</button>
                            </Link>
                        </div>
                </div>
                    <div className="dashboard-details__hero">
                        <img className="dashboard-details__image" src={DashboardHero} alt="dashboard hero" />
                    </div>
                </div>
            </div>
        )
    }
}
