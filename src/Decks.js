import React from "react";
import * as DeckAPI from "./data/DeckAPI";

const DECKS = DeckAPI.getAllDecks();

export const Decks = props => {
  const onClick = deck => () => {
    props.onDeckClick(deck);
  };

  return (
    <ul className="nav nav-pills">
      {DECKS.map(deck => {
        let className = "nav-link";

        if (props.deck && props.deck.name === deck.name) {
          className += " active";
        }

        return (
          <li key={deck.name} className="nav-item">
            <a className={className} href="#" onClick={onClick(deck)}>
              {deck.name} ({deck.cards.length})
            </a>
          </li>
        );
      })}
    </ul>
  );
};
