import React from "react";
import { Component } from "react";
import axios from "axios";
import ResultsNav from "../../components/ResultsNav/ResultsNav";
import ResultsItem from '../../components/ResultsItem/ResultsItem'

class ResultsPage extends Component {
  state = {
    animalList: "",
    // userPreferences: {},
    isLoading: true,
    userInfo: {}
  };

//   getUserPreferences = (userId) => {
//     axios.get(`http://localhost:8080/users/userpreferences/${userId}`)
//         .then((response) => {
//             this.setState({
//                 userPreferences: response.data[0]
//             })
//         })
//         .catch((error) => (error))
//  }

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
          // this.getUserPreferences(userInfo)
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
  
  render() {
    const { isLoading, userInfo } = this.state
    if (!this.state.animalList) return <div><p className="loading">Loading...</p></div>

    const filteredAnimals = this.state.animalList.filter(animal => animal.age == this.state.userInfo.age)
    const filteredBreed = filteredAnimals.filter(animal => animal.breeds.primary == this.state.userInfo.breed)
    console.log(filteredBreed)

    return isLoading ?
    <h1>Loading...</h1>
    :
        (
      <div className="results-page">
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
