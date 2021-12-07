import React from "react";
import { Component } from "react";
import axios from "axios";
import ResultsNav from "../../components/ResultsNav/ResultsNav";
import ResultsItem from '../../components/ResultsItem/ResultsItem'

class ResultsPage extends Component {
  state = {
    animalList: "",
    isLoading: true,
    userInfo: {}
  };

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
          const userInfo = res.data
          console.log(userInfo)
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

handleLogOut = (e) => {
  e.preventDefault()

  sessionStorage.removeItem('authToken')

  this.props.history.push('/login')
}
  
  render() {
    const { isLoading, userInfo } = this.state
    if (!this.state.animalList) return <div><p className="loading">Loading...</p></div>

    const filteredAnimals = this.state.animalList.filter(animal => animal.age === this.state.userInfo.age)
    const filteredBreed = filteredAnimals.filter(animal => animal.breeds.primary === this.state.userInfo.breed)

    return isLoading ?
    <h1>Loading...</h1>
    :
        (
      <div className="results-page">
               <button className="paw-dashboard__button" onClick={this.handleLogOut}>Log Out</button> 
                         

        <ul className="results-item__list">
          <li className="results-item__item">
            {filteredBreed.map((animal) => (
              <ResultsItem
                key={animal.id}
                id={animal.id}
                breed={animal.breeds}
                name={animal.name}
                age={animal.age}
                photos={animal.photos}
              />
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

export default ResultsPage;
