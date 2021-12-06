import React from "react";


function DropDownItem({ breed, species }) {
  return (
      <>
        {/* <option value="species">{species}</option> */}
        <option value="breeds">{breed}</option>
    </>
  );
}

export default DropDownItem;
