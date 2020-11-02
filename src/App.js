import React from "react";
import { Decks } from "./Decks";
import { Card } from "./Card";
import { Results } from "./Results";
import { Progress } from "./Progress";

export const App = () => {
  return (
    <div className="container">
      <h1>Flashcards</h1>
      <Decks />
      <Progress />
      <Card />
      <Results />
    </div>
  );
};
