import React from "react";

function ResultsItem({ name, id, getUserPreferences }) {
  return (
    <div>
      <li onClick={() => getUserPreferences(id)}>{name}</li>
    </div>
  );
}

export default ResultsItem;
