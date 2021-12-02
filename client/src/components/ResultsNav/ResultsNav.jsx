import React from "react";
import ResultsItem from "../ResultsItem/ResultsItem";

function ResultsNav({ animals, getUserPreferences }) {
  return (
    <div>
      <nav>
        <ul>
          {animals.map((animal) => (
            <ResultsItem
              key={animal.id}
              id={animal.id}
              name={animal.name}
              getUserPreferences={getUserPreferences}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ResultsNav;
