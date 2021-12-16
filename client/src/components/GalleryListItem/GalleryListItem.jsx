import React from "react";
import GalleryList from "../GalleryList/GalleryList";

function GalleryListItem({ search }) { console.log(search)
  return (
      <div className="gallery-item__wrapper">
            {search.map(item => 
            <GalleryList 
            key={item.id}
            id={item.id}
            name={item.name}
            age={item.age}
            photos={item.photos}/>
              )}
        </div>
  
  );
}

export default GalleryListItem;
