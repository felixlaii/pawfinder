import axios from 'axios'
import React, { Component } from 'react'

export default class DashboardDetails extends Component {
    state = {
        userPreferences: [],
        userList: []
    }

     getUserPreferences = (userId) => {
        axios.get(`http://localhost:8080/users/userpreferences/${userId}`)
            .then((response) => { console.log(response.data[0])
                this.setState({
                    userPreferences: response.data[0]
                })
            })
            .catch((error) => console.log(error))
     }

    componentDidMount() { 
        axios.get(`http://localhost:8080/users/allusers`)
            .then((response) => { console.log('supppp', response)
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
                <p>{this.state.userPreferences.firstName}</p>
                
            </div>
        )
    }
}
