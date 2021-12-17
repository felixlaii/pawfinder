import React, { Component } from "react";
import axios from "axios";
import "./searchBar.scss";
import GalleryListItem from "../GalleryListItem/GalleryListItem";

export default class SearchBar extends Component {
  state = {
    isLoading: false,
    searchQuery: "",
    animalList: [],
    errorLoading: false,
  };

  handleQueryChange = (e) => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.value,
    });
  };

  getAnimals = (searchQuery) => {
    axios
      .get(`http://localhost:8080/search/species/${searchQuery}`)
      .then((response) => {
        this.setState({
          isLoading: false,
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

  componentDidMount() {
    const searchQuery = this.props.match.params.searchQuery;

    if (searchQuery) {
      this.getAnimals(searchQuery);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const searchQuery = this.state.searchQuery;
    const prevSearchQuery = prevState.searchQuery;

    if (searchQuery !== prevSearchQuery) {
      this.getAnimals(searchQuery);
    }
  }

  render() {
    return (
      <div className="adoption-search">
        <input
          onChange={this.handleQueryChange}
          id="search"
          name="search"
          type="text"
          value={this.state.searchQuery}
          placeholder="find your pawfect friend..."
          className="adoption-search__input"
        />

        {this.state.searchQuery ? (
          <GalleryListItem search={this.state.animalList} />
        ) : (
          <p> hello </p>
        )}
      </div>
    );
  }
}
