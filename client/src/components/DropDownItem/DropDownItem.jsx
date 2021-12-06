import React from "react";
import '../../components/Input/input.scss'


function DropDownItem({ breed, age, animalType }) {
  return (
    <div className="dropdown-item">
      <select className="input-field__input" name="animalType">
        <option value="dogs">{breed}</option>
      </select>
    </div>
  );
}

export default DropDownItem;
