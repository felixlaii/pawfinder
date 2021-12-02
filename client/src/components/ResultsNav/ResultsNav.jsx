import React from "react";
import ResultsItem from "../ResultsItem/ResultsItem";

function ResultsNav({ animalList }) {
  console.log(animalList)
  return (
    <div>
      <nav>
        <ul>
        <li>
                     {animalList.map(animal => (
                        <ResultsItem
                        key={animal.id}
                        id={animal.id}
                        name={animal.name}
                        /> 
                    ))}   
                </li>
        </ul>
      </nav>
    </div>
  );
}

export default ResultsNav;
