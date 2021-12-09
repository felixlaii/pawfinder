import React, { Component } from "react";
import axios from "axios";
import AdoptionItem from "../../components/AdoptionItem/AdoptionItem";
import '../../styles/partials/_global.scss'


export default class AdoptionPage extends Component {
  state = {
    selectedAnimal: null,
  };

  selectedAnimal = (id) => {
    axios
      .get(`http://localhost:8080/${id}`)
      .then((response) => { console.log(response)
        this.setState({
          selectedAnimal: response.data,
        });
      })
      .catch((error) => error);
  };

  componentDidMount() {
    const animalId = this.props.match.params.id;

    this.selectedAnimal(animalId);
  }

  render() {
    if (!this.state.selectedAnimal) {
      return (
        <div>
          <h1 className="pawfinder__loading">ruff...no more pets, try again!</h1>
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
            url={this.state.selectedAnimal.url}
          />
        </ul>
      </div>
    );
  }
}
