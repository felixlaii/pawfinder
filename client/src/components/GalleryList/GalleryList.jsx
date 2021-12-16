import React from "react";
import {Link} from 'react-router-dom'
import './galleryList.scss'
import DogPlaceHolder from "../../assets/images/placeholder-results.jpg";

function GalleryList({ key, id, name, photos }) {
  if (photos.length === 0) {
    photos = DogPlaceHolder;
  } else {
    photos = photos[0].small;
  }
  return (
    <div className="gallery-item">
    <div className="gallery-item__wrapper">
      <div className="gallery-item__card">
        <ul className="gallery-item__list">
          <div className="gallery-item__info">
            <li className="gallery-item__item">{name}</li>
            {/* <li className="gallery-item__item">{age}</li> */}
          </div>
          <Link to={`/adoption/${id}`}>
            <img
              className="gallery-item__image"
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

export default GalleryList;
