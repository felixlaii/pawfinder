import React from "react";
import { Component } from "react";
// import DashBoard from '../Dashboard/Dashboard'
import axios from "axios";
import ResultsNav from "../../components/ResultsNav/ResultsNav";

class ResultsPage extends Component {
  state = {
    animalList: null,
    userPreferences: {},
  };


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
  let token = sessionStorage.getItem('authToken')

  if(!!token) {
      axios.get(`http://localhost:8080/users/current`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      .then(res => {
          this.setState({ 
              userInfo: res.data,
              isLoading: false
          })
          getUserPreferences(userInfo)
      })
  } else {
      this.props.history.push('/login')
  }
}

  componentDidMount() {
    axios
      .get(`http://localhost:8080`)
      .then((response) => {
        this.setState({
          animalList: response.data.animals,
        })   
      })
      .catch((error) => console.log(error));
  }

  
  render() {
    const { isLoading, userInfo } = this.state

    if (!this.state.animalList) return <div><p className="loading">Loading...</p></div>

    return isLoading ?
    <h1>Loading...</h1>
    :
        (
      <div className="results-page">
        <ResultsNav
        animalList={this.state.animalList}
        />
      </div>
    );
  }
}

export default ResultsPage;
