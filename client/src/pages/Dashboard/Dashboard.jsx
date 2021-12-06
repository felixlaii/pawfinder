import React from 'react'
import axios from 'axios'
import DashboardDetails from '../../components/DashboardDetails/DashboardDetails'
import AccountIcon from '../../assets/icons/account-icon.png'
import './dashboard.scss'

class Dashboard extends React.Component {
    state = {
        isLoading: true,
        userInfo: {}
    }

    componentDidMount() {
        let token = sessionStorage.getItem('authToken')

        if(!!token) {
            axios.get(`http://localhost:8080/users/current`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                console.log('helllllllo', res.data)
                this.setState({
                    userInfo: res.data,
                    isLoading: false
                })
            })
        } else {
            this.props.history.push('/login')
        }
    }

    handleLogOut = (e) => {
        e.preventDefault()

        sessionStorage.removeItem('authToken')

        this.props.history.push('/login')
    }

    render() {
        const { isLoading, userInfo } = this.state
        return isLoading ?
        <h1>Loading...</h1>
        :
            (
                <div className="paw-dashboard">
                    <div className="paw-dashboard__header">
                        <h2 className="paw-dashboard__loggedin">Welcome! {userInfo.firstName} {userInfo.lastName}</h2>
                        <div className="paw-dashboard__wrapper">
                            <img className="paw-dashboard__icon" src={AccountIcon} alt="account icon" />
                        </div>
                        <button className="paw-dashboard__button" onClick={this.handleLogOut}>Log Out</button>

                    </div>
                <DashboardDetails
                userId = {this.state.userInfo.userId} 
                />

                    
                </div>
            )
    }
}

export default Dashboard
