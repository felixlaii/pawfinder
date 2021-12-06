import React, { Component } from 'react'
import axios from 'axios'
import './searchBar.scss'
import ResultsNav from '../../components/ResultsNav/ResultsNav'

export default class SearchBar extends Component {
    state = {
        searchQuery: "",
        animalList: null,
        errorLoading: false
    }

    handleQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value,
        })
    }

    getAnimals = (searchQuery) => {
        axios
            .get(`http://localhost:8080/search${searchQuery}`)
            .then((response) => {
                this.props.filterByQuery(this.state.query)
                this.setState({
                    errorLoading: false,
                    searchQuery: searchQuery,
                    animalList: response.data.animals
                })
            })
            .catch((error) => {
                this.setState({
                    errorLoading: true,
                })
            })
    }



    render() {
        return (
            <div className="adoption-search">
                <form onChange={this.handleQueryChange}>
                    <input type="text" placeholder="find your pawfect friend..." className="adoption-search__input" value={this.state.searchQuery} onChange={this.getAnimals}/>
                </form>
        
            </div>
          
        )
    }
} 
