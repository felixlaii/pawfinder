import React from 'react'

function GalleryListItem({name, age}) {
    return (
        <div className="gallery-item">
        <div className="gallery-item__wrapper">
          <div className="gallery-item__card">
            <ul className="gallery-item__list">
              <div className="gallery-item__info">
                <li className="gallery-item__item">{name}</li>
                <li className="gallery-item__item">{age}</li>
              </div>
              <ion-icon name="paw-outline"></ion-icon>
              {/* <img className="gallery-item__image" src='../../assets/images/hero.jpg' alt="dog placeholder" /> */}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default GalleryListItem
