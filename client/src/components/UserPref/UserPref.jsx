import React, { Component } from 'react'
import axios from 'axios';
import DashBoard from '../../pages/Dashboard/Dashboard'

export default class UserPref extends Component {
    state = {
        userPreferences: null
    }

  
    getUserPreferences = (userId) => {
    axios
      .get(`http://localhost:8080/users/userpreferences/${userId}`)
      .then((response) => {
        this.setState({
          userPreferences: response.data,
        });
      })
      .catch((error) => (error));
  };


    render() {
        if (!this.state.userPreferences) return <div><p className="loading">OOPS...This page is in progress</p></div>

        return (
            <div>
                <DashBoard />
            </div>
        )
    }
}
