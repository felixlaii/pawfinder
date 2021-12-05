import React from 'react'
import axios from 'axios'
import DashboardDetails from '../../components/DashboardDetails/DashboardDetails'

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

        this.props.history.push('/login')
    }

    render() {
        const { isLoading, userInfo } = this.state
        return isLoading ?
        <h1>Loading...</h1>
        :
            (
                <div className="paw-dashboard">
                    <h2 className="paw-dashboard__loggedin">Welcome! {userInfo.firstName} {userInfo.lastName}</h2>
                <DashboardDetails
                userId = {this.state.userInfo.userId} 
                />
                    <button onClick={this.handleLogOut}>Log Out</button>

                    
                </div>
            )
    }
}

export default Dashboard
