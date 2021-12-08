import React from "react";
import DogPlaceHolder from "../../assets/images/placeholder-results.jpg";
import "./resultsItem.scss";
import { Link } from "react-router-dom";

function ResultsItem({ name, age, photos, id }) {
  if (photos.length === 0) {
    photos = DogPlaceHolder;
  } else {
    photos = photos[0].small;
  }

  return (
    <div className="results-item">
      <div className="results-item__wrapper">
        <div className="results-item__card">
          <ul className="results-item__list">
            <div className="results-item__info">
              <li className="results-item__item">{name}</li>
              <li className="results-item__item">{age}</li>
            </div>
            <Link to={`/adoption/${id}`}>
              <img
                className="results-item__image"
                src={photos}
                alt="dog placeholder"
              />
            </Link>
             
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResultsItem;
