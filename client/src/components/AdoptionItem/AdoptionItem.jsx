import React from 'react'
import DogPlaceHolder from "../../assets/images/placeholder-results.jpg"

function AdoptionItem({ breed, color, age, gender, name, description, photos, status}) {

    if(photos.length === 0) {   
        photos = DogPlaceHolder
      } else {
        photos = photos[0].small
      }

    return (
        <div className="adoption-item">
        <div className="adoption-item__wrapper">
          <div className="adoption-item__card">
            <ul className="adoption-item__list">
            <div className="adoption-item__card">
              <div className="adoption-item__info">

                  <div className="adoption-item__imagewrapper">
                    <img className="adoption-item__image" src={photos} alt="dog placeholder" />
                </div>

                <div className="adoption-item__details">
                    <p className="adoption-item__item">{name}</p>
                    <p className="adoption-item__item">{age}</p>
                    <p className="adoption-item__item">{breed}</p>
                    <p className="adoption-item__item">{gender}</p>
                    <p className="adoption-item__item">{color}</p>

                </div>
                <div className="adoption-item__description">
                    <p className="adoption-item__item">{description}</p>
                    <p className="adoption-item__item">{status}</p>
                </div>

                <button className="adoption-item__submit">go back</button>

                <button className="adoption-item__submit">adopt!</button>


            </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default AdoptionItem
