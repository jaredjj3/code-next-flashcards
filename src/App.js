import React, { useState } from "react";
import { Decks } from "./Decks";
import { Card } from "./Card";
import { Results } from "./Results";
import { Progress } from "./Progress";

export const App = () => {
  const [deck, setDeck] = useState(null);
  const [cardNdx, setCardNdx] = useState(null);

  const onDeckClick = deck => {
    setDeck(deck);
    setCardNdx(0);
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>

      <Decks deck={deck} onDeckClick={onDeckClick} />

      <hr />

      <Card />
      <Progress />
      <Results />
    </div>
  );
};
