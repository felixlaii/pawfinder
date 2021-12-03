import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './searchBar.scss'
import GalleryList from '../GalleryList/GalleryList'
import GalleryListItem from '../GalleryListItem/GalleryListItem'

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

    getAnimals = (e) => {
        console.log(e)
        const searchQuery = e.target.value
        axios
            .get(`http://localhost:8080/search/${searchQuery}`)
            .then((response) => { console.log(response)
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
                <form action="/gallery">
                    <input type="text" placeholder="find your pawfect friend..." name="searchQuery" className="adoption-search__input" onChange={this.getAnimals}/>
                </form>
                <div className="adoption-search__results">
                    {this.state.query ? (
                        <GalleryList animalList={this.state.animalList} />
                        ) : (
                            <p>Please enter a search term above</p>
                        )}
                    {this.state.errorLoading && (
                            <p>There was an error loading your search results</p>
                    )}
                </div>
        
            </div>
          
        )
    }
} 