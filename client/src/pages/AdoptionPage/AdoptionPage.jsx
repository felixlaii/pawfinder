import React, { Component } from 'react'
import axios from 'axios'
import AdoptionItem from '../../components/AdoptionItem/AdoptionItem'

export default class AdoptionPage extends Component {
    state={
        animalList: null,
        selectedAnimal: null,
    }


  selectedAnimal = (animalId) => {
    axios.get(`http://localhost:8080/${animalId}`)
        .then((response) => {
            this.setState({
                selectedAnimal: response.data.animals
            })
        })
        .catch((error) => console.log(error))
  }

    componentDidMount() {
        axios.get(`http://localhost:8080`)
        .then((response) => { 
            this.setState({ 
                animalList: response.data.animals,
            })
            const animalId = this.props.match.params.animalId || response.data[0].id

            this.getSelectedAnimal(animalId)
        })
        .catch((error) => (error))
    }

    render() {
        if (!this.state.selectedAnimal.id) return <div><p className="loading">Loading...</p></div>


        return (
            <div className="adoption-page">
                <ul className="adoption-page__list">
                    {this.state.animalList.map((animal) => (
                        <AdoptionItem
                        key={animal.id} 
                        id={animal.id}
                        species={animal.species}
                        breed={animal.breeds.primary}
                        color={animal.color}
                        age={animal.age}
                        gender={animal.gender}
                        name={animal.name}
                        description={animal.description}
                        photos={animal.photos.small}
                        status={animal.status}
                        />

                    ))}
                </ul>
                
            </div>
        )
    }
}
