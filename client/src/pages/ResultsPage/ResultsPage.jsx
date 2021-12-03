import React from "react";
import { Component } from "react";
// import DashBoard from '../Dashboard/Dashboard'
import axios from "axios";
import ResultsNav from "../../components/ResultsNav/ResultsNav";

class ResultsPage extends Component {
  state = {
    animalList: null,
    // userPreferences: {},
  };

  // componentDidMount
  // getUserPreferences = (userId) => {
  //   axios
  //     .get(`http://localhost:8080/users/userpreferences/${userId}`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         userPreferences: response.data,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

  componentDidMount() {
    axios
      .get(`http://localhost:8080`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          animalList: response.data.animals,
        });
        // const userId = this.props.match.params.userId || response.data[0];

        // this.getUserPreferences(userId);
      })
      .catch((error) => console.log(error));
  }
  render() {
    // const filteredAnimals = this.state.animalList.filter(
    //   (animal) => animal.id !== this.state.userPreferences
    // );
    if (!this.state.animalList) return <div><p className="loading">Loading...</p></div>

    return (
      <div className="results-page">

{/* 
        <ul>
          <li>{this.state.animalList.name}</li>
        </ul> */}
        <ResultsNav
        animalList={this.state.animalList}
          // animals={filteredAnimals}
          // userPreferences={this.getUserPreferences}
        />
        {/* <DashBoard /> */}
      </div>
    );
  }
}

export default ResultsPage;
