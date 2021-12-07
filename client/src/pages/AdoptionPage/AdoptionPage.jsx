import React, { Component } from 'react'
import axios from 'axios'

export default class AdoptionPage extends Component {
    state={
        adoptionAgency: null,
    }

    componentDidMount() {
        axios.get(`http://localhost:8080`)
        .then((response) => { 
            this.setState({ 
                adoptionAgency: response.data.animals,
            })
        })
        .catch((error) => (error))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
