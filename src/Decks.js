import React from "react";
import DECKS from "./data/DECKS.json";

export const Decks = props => {
  return (
    <ul className="nav nav-pills">
      {DECKS.map(deck => (
        <li key={deck.name} className="nav-item">
          <a className="nav-link" href="#">
            {deck.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
