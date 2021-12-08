import React from "react";
import DogPlaceHolder from "../../assets/images/placeholder-results.jpg";
import "./adoptionItem.scss";
import { Link } from "react-router-dom";

function AdoptionItem({
  breed,
  age,
  gender,
  name,
  description,
  photos,
  status,
}) {
  if (photos.length === 0) {
    photos = DogPlaceHolder;
  } else {
    photos = photos[0].small;
  }

  return (
    <div className="adoption-item">
      <div className="adoption-item__wrapper">
        <ul className="adoption-item__list">
          <div className="adoption-item__card">
            <div className="adoption-item__info">
              <div className="adoption-item__imagewrapper">
                <img
                  className="adoption-item__image"
                  src={photos}
                  alt="dog placeholder"
                />
              </div>
              <div className="adoption-item__cardwrapper">
                <div className="adoption-item__details">
                  <div className="adoption-item__detailwrapper">
                    <p className="adoption-item__title">name:</p>
                    <p className="adoption-item__item">{name}</p>
                  </div>
                  <div className="adoption-item__detailwrapper">
                    <p className="adoption-item__title">age:</p>
                    <p className="adoption-item__item">{age}</p>
                  </div>

                  <div className="adoption-item__detailwrapper">
                    <p className="adoption-item__title">breed:</p>
                    <p className="adoption-item__item">{breed}</p>
                  </div>
                  <div className="adoption-item__detailwrapper">
                    <p className="adoption-item__title">gender:</p>
                    <p className="adoption-item__item">{gender}</p>
                  </div>
                </div>
                <div className="adoption-item__detaildescription">
                  <p className="adoption-item__title">description:</p>

                  <p className="adoption-item__item">{description}</p>
                </div>

                <div className="adoption-item__detailwrapper">
                  <p className="adoption-item__title">status:</p>

                  <p className="adoption-item__item">{status}</p>
                </div>

                <div className="adoption-item__button"></div>
              </div>
            </div>
          </div>
        </ul>
        <Link to="/results">
          <button className="adoption-item__submit">go back</button>
        </Link>
        <button className="adoption-item__submit">adopt!</button>

      </div>
    </div>
  );
}

export default AdoptionItem;
