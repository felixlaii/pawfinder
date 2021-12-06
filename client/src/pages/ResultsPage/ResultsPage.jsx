import React from "react";
import { Component } from "react";
import axios from "axios";
import ResultsNav from "../../components/ResultsNav/ResultsNav";

class ResultsPage extends Component {
  state = {
    animalList: null,
    userPreferences: {},
    isLoading: true,
    userInfo: {}
  };

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
          const userInfo = res.data.userId
          this.getUserPreferences(userInfo)
          
      })
  } else {
      this.props.history.push('/login')
  }
  axios
      .get(`http://localhost:8080`)
      .then((response) => {
        this.setState({
          animalList: response.data.animals,
        })   
      })
      .catch((error) => (error));

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
