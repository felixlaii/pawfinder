import React from "react";
import DogPlaceHolder from "../../assets/images/hero.jpg";
import "./resultsItem.scss";

function ResultsItem({ name, age }) {
  return (
    <div className="results-item">
      <div className="results-item__wrapper">
        <div className="results-item__card">
          <ul className="results-item__list">
            <div className="results-item__info">
              <li className="results-item__item">{name}</li>
              <li className="results-item__item">{age}</li>
            </div>
            <img className="results-item__image" src={DogPlaceHolder} alt="dog placeholder" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResultsItem;
