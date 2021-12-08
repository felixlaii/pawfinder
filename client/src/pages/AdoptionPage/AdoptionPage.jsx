import React, { Component } from "react";
import axios from "axios";
import AdoptionItem from "../../components/AdoptionItem/AdoptionItem";

export default class AdoptionPage extends Component {
  state = {
    selectedAnimal: null,
  };

  selectedAnimal = (id) => {
    axios
      .get(`http://localhost:8080/${id}`)
      .then((response) => { 
        this.setState({
          selectedAnimal: response.data
        });
    
      })
      .catch((error) => (error));
  };

  componentDidMount() {
        const animalId =
          this.props.match.params.id; 

        this.selectedAnimal(animalId);
      }

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
            <AdoptionItem
              key={this.state.selectedAnimal.id}
              id={this.state.selectedAnimal.id}
              species={this.state.selectedAnimal.species}
              breed={this.state.selectedAnimal.breeds.primary}
              color={this.state.selectedAnimal.colors.primary}
              age={this.state.selectedAnimal.age}
              gender={this.state.selectedAnimal.gender}
              name={this.state.selectedAnimal.name}
              description={this.state.selectedAnimal.description}
              photos={this.state.selectedAnimal.photos}
              status={this.state.selectedAnimal.status}
            />
        </ul>
      </div>
      )
    }
}
