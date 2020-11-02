import React, { useState, useEffect } from "react";
import { Decks } from "./Decks";
import { Card } from "./Card";
import { Results } from "./Results";
import { Progress } from "./Progress";
import * as DeckAPI from "./data/DeckAPI";

const DEFAULT_DECK = DeckAPI.getAllDecks()[0];

export const App = () => {
  const [deck, setDeck] = useState(DEFAULT_DECK);
  const [ndx, setNdx] = useState(0);
  const [results, setResults] = useState([]);

  const isFinished = results.length === deck.cards.length;

  const onDeckClick = deck => {
    setDeck(deck);
    setNdx(0);
    setResults([]);
  };

  const onResetClick = () => {
    setDeck(DEFAULT_DECK);
    setNdx(0);
    setResults([]);
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>

      <Decks deck={deck} onDeckClick={onDeckClick} />

      <hr />

      <Progress />

      <br />

      <Card card={deck.cards[ndx]} />

      <br />
      <button
        className="btn btn-outline-danger btn-block"
        onClick={onResetClick}
      >
        reset
      </button>

      {isFinished && <Results />}
    </div>
  );
};
