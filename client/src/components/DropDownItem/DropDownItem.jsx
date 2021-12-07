import React from "react";


function DropDownItem({ breed, species }) {
  return (
      <>
        {/* <option value="species">{species}</option> */}
        <option name="breed" >{breed}</option>
    </>
  );
}

export default DropDownItem;
