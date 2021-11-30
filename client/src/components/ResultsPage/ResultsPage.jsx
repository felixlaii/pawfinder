import React from 'react'
import axios from 'axios'

class ResultsPage extends React {
    state = {
        animals: [],
        selectedAnimal: {}
    }

    componentDidMount() {
        axios.get(`http://localhost:8080`) 
            .then((response) => {
                this.setState({
                    selectedAnimal: response.data
                })
                .catch((error) => (error))
            })}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ResultsPage
