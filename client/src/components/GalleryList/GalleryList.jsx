import React from 'react'
import GalleryItem from '../GalleryListItem/GalleryListItem'

function GalleryList({animalList}) {
  console.log(animalList)
    return (
        <div>
              <nav>
        <ul className="gallery-item__list">
          <li className="gallery-item__item">
            {animalList.map((animal) => (
              <GalleryItem key={animal.id} id={animal.id} name={animal.name} age={animal.age} />
            ))}
          </li>
        </ul>
      </nav>
        </div>
    )
}

export default GalleryList
