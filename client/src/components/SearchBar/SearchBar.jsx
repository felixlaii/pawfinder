import React, { Component } from "react";
import axios from "axios";
import "./searchBar.scss";

export default class SearchBar extends Component {
  state = {
    searchQuery: "",
    animalList: null,
    errorLoading: false,
  };

  searchRef = React.createRef();
  handleQueryChange = (e) => {
    e.preventDefault();
  };

  getAnimals = (searchQuery) => {
    axios
      .get(`http://localhost:8080/search/species/${searchQuery}`)
      .then((response) => {
        this.setState({
          errorLoading: false,
          animalList: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorLoading: true,
        });
      });
  };

  render() {
    return (
      <div className="adoption-search">
        <form>
          <input
            ref={this.searchRef}
            id="search"
            name="search"
            type="text"
            placeholder="find your pawfect friend..."
            className="adoption-search__input"
          />
        </form>
      </div>
    );
  }
}
