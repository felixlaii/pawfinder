import React from "react";
import { Component } from "react";
// import DashBoard from '../Dashboard/Dashboard'
import axios from "axios";
import ResultsNav from "../../components/ResultsNav/ResultsNav";

class ResultsPage extends Component {
  state = {
    animalList: [],
    userPreferences: [],
  };

  getUserPreferences = (userId) => {
    axios
      .get(`http://localhost:8080/users/userpreferences/${userId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          userPreferences: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          animalList: response.data,
        });
        const userId = this.props.match.params.userId || response.data[0];

        this.getUserPreferences(userId);
      })
      .catch((error) => console.log(error));
  }
  render() {
    const filteredAnimals = this.state.animalList.filter(
      (animal) => animal.id !== this.state.userPreferences
    );
    return (
      <div className="results-page">
        <ResultsNav
          animalList={filteredAnimals}
          userPreferences={this.getUserPreferences}
        />
        {/* <DashBoard /> */}
      </div>
    );
  }
}

export default ResultsPage;
