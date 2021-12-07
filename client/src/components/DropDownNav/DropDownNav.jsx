import React from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import "../Input/input.scss";

function DropDownNav({ animalList }) {
  return (
    <div>
      <nav>
        <div className="dropdown-nav__list">
          <label className="input-field__label">select breed</label>
          <select className="input-field__input" name="breed">
            {animalList.map((animal) => (
              <DropDownItem
                key={animal.id}
                id={animal.id}
                breed={animal.breeds.primary}
                species={animal.species}
              />
            ))}
          </select>
        </div>
      </nav>
    </div>
  );
}

export default DropDownNav;
