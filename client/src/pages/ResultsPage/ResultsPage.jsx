import React from "react";
import { Component } from "react";
import axios from "axios";
import ResultsItem from "../../components/ResultsItem/ResultsItem";
import UserWelcome from "../../components/UserWelcome/UserWelcome";
import '../../styles/partials/_global.scss'


class ResultsPage extends Component {
  state = {
    animalList: "",
    isLoading: true,
    userInfo: {},
  };

  componentDidMount() {
    let token = sessionStorage.getItem("authToken");

    if (!!token) {
      axios
        .get(`http://localhost:8080/users/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.setState({
            userInfo: res.data,
            isLoading: false,
          });
          const userInfo = res.data;
        });
    } else {
      this.props.history.push("/login");
    }
    axios
      .get(`http://localhost:8080`)
      .then((response) => {
        this.setState({
          animalList: response.data.animals,
        });
      })
      .catch((error) => error);
  }

  handleLogOut = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("authToken");

    this.props.history.push("/login");
  };

  render() {
    const { isLoading, userInfo } = this.state;
    if (!this.state.animalList)
      return (
        <div>
          <h1 className="pawfinder__loading">ruff...no more pets, try again!</h1>
        </div>
      );
    const filteredBreed = this.state.animalList.filter(
      (animal) => animal.breeds.primary === this.state.userInfo.breed
    );

    return isLoading ? (
      <h1 className="pawfinder__loading">ruff...no more pets, try again!</h1>
    ) : (
      <div className="results-page">
        <UserWelcome 
        />
        <div className="results-item__listwrapper">
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
                  selectedAnimal={this.selectedAnimal}
                />
              ))}
            </li>
          </ul>
        </div>
        <button className="paw-dashboard__button">more options</button>
      </div>
    );
  }
}

export default ResultsPage;
