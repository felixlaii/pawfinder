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
        e.preventDefault()
        // this.setState({
        //     searchQuery: e.target.search.value,
        // })
        this.getAnimals(e.target.search.value)
    }

    getAnimals = (searchQuery) => {
        axios
            .get(`http://localhost:8080/searchspecies/${searchQuery}`)
            .then((response) => {
                this.props.filterByQuery(this.state.query)
                this.setState({
                    errorLoading: false,
                    // searchQuery: searchQuery,
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
                <form onKeyPress={(e) => e.key === 'Enter' && this.handleQueryChange()}>
                    <input id="search" type="text" placeholder="find your pawfect friend..." className="adoption-search__input"/>
                </form>
        
            </div>
          
        )
    }
} 
