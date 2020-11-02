import React, { useState, useEffect } from "react";
import { Decks } from "./Decks";
import { Card } from "./Card";
import { Results } from "./Results";
import { Progress } from "./Progress";

export const App = () => {
  const [deck, setDeck] = useState(null);
  const [ndx, setNdx] = useState(null);
  const [results, setResults] = useState(null);

  const isStarted = deck !== null;
  const isFinished =
    isStarted && results !== null && results.length === deck.cards.length;

  const onDeckClick = deck => {
    setDeck(deck);
    setNdx(0);
    setResults([]);
  };

  const onResetClick = () => {
    setDeck(null);
    setNdx(null);
    setResults(null);
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>

      <Decks deck={deck} onDeckClick={onDeckClick} />

      <hr />

      {isStarted && <Card card={deck.cards[ndx]} />}

      {isStarted && (
        <>
          <br />
          <Progress />
        </>
      )}

      {isStarted && (
        <>
          <br />
          <button
            className="btn btn-outline-danger btn-block"
            onClick={onResetClick}
          >
            reset
          </button>
        </>
      )}

      {isFinished && <Results />}
    </div>
  );
};
