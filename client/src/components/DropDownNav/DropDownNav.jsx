import React from "react";
import DropDownItem from '../DropDownItem/DropDownItem'

function DropDownNav({ animalList }) { 
  return (
    <div>
      <nav>
        <ul className="dropdown-nav__list">
          <li className="dropdown-nav__item">
            {animalList.map((animal) => (
              <DropDownItem
                key={animal.id}
                id={animal.id}
                breed={animal.breeds.primary}
              />
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DropDownNav;
