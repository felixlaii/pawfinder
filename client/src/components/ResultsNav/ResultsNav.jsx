import React from "react";
import ResultsItem from "../ResultsItem/ResultsItem";

function ResultsNav({ animalList }) {
  return (
    <div>
      <nav>
        <ul className="results-item__list">
          <li className="results-item__item">
            {animalList.map((animal) => (
              <ResultsItem key={animal.id} id={animal.id} name={animal.name} age={animal.age} />
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ResultsNav;
