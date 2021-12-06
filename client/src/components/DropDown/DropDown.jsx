import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import DropDownNav from '../DropDownNav/DropDownNav'

class DropDown extends Component {
    state = {
        animalList: null,
        breed: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:8080`)
            .then((response) => {
                this.setState({ 
                    animalList: response.data.animals,
                })
            })
           
            .catch((error) => (error))
    }
    render() {
        if (!this.state.animalList) return <div><p className="loading">Loading...</p></div>

        return (
            <div>
               <DropDownNav 
               animalList={this.state.animalList}
               />
            </div>
        )
    }
}

export default DropDown
