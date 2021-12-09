import React from "react";
import { Component } from "react";
import axios from "axios";
import DropDownNav from "../DropDownNav/DropDownNav";
import '../../styles/partials/_global.scss'

class DropDown extends Component {
  state = {
    animalList: null,
    breed: [],
    cats: null,
    dogs: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080`)
      .then((response) => {
        this.setState({
          animalList: response.data.animals,
        });
      })
      .catch((error) => error);
  }

  render() {
    if (!this.state.animalList)
      return (
        <div>
          <h1 className="pawfinder__loading">ruff...no more pets, try again!</h1>
        </div>
      );

    return (
      <div>
        <DropDownNav animalList={this.state.animalList} />
      </div>
    );
  }
}

export default DropDown;
