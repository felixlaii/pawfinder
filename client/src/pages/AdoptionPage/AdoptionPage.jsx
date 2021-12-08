import React, { Component } from "react";
import axios from "axios";
import AdoptionItem from "../../components/AdoptionItem/AdoptionItem";

export default class AdoptionPage extends Component {
  state = {
    animalList: null,
    selectedAnimal: null,
  };


  selectedAnimal = (id) => {
    axios
      .get(`http://localhost:8080/${id}`)
      .then((response) => { 
        this.setState({
          selectedAnimal: response.data.animals.id
        });
    
      })
      .catch((error) => (error));
  };

  componentDidMount() {
    // axios
    //   .get(`http://localhost:8080`)
    //   .then((response) => {  
    //     this.setState({ 
    //       animalList: response.data.animals
    //     });
        const animalId =
          this.props.match.params.animalId; 

        this.selectedAnimal(animalId);
   
      }
      // )
      // .catch((error) => error);
  

  render() {
    if (!this.state.selectedAnimal) {
      return (
        <div>
          <p className="loading">Loading...</p>
        </div>
      );
    }
    return (
      <div className="adoption-page">
        <ul className="adoption-page__list">
          {this.state.selectedAnimal.map((animal) => (
            <AdoptionItem
              key={animal.id}
              id={animal.id}
              species={animal.species}
              breed={animal.breeds.primary}
              color={animal.colors.primary}
              age={animal.age}
              gender={animal.gender}
              name={animal.name}
              description={animal.description}
              photos={animal.photos}
              status={animal.status}
            />
          ))}
        </ul>
      </div>
      )
    }
}
