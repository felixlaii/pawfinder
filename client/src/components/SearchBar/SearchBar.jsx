import React, { Component } from 'react'
import axios from 'axios'

export default class SearchBar extends Component {
    state = {
        query: "",
        animals: {},
        errorLoading: false
    }

    handleQueryChange = (e) => {
        this.setState({
            query: e.target.value,
        })
    }

    getAnimals = (query) => {
        axios
            .get(searchAnimalsEndpoint(query))
            .then((response) => {
                this.setState({
                    errorLoading: false,
                    query: query,
                    animals: response.data.results,
                })
            })
            .catch((error) => {
                this.setState({
                    errorLoading: true,
                })
            })
    }

    componentDidMount() {
        const query = this.props.match.params.searchQuery;

        if(query) {
            this.getAnimals(query)
        }
    }
    
    componentDidUpdate(prevProps) {
        const query = this.props.match.params.searchQuery;
        const prevQuery = prevProps.match.params.searchQuery;

        if(query !== prevQuery) {
            this.getAnimals(query);
        }
    }
    render() {
        return (
            <div className="adoption-search">
                <input placeholder="find your pawfect friend ..." className="adoption-search__input" value={this.state.query} onChange={this.handleQueryChange} />
            </div>
        )
    }
}
