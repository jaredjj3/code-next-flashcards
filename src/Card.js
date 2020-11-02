import React, { useState } from "react";

export const Card = props => {
  const [isFrontVisible, setFrontVisibility] = useState(true);

  const onFlipClick = () => {
    setFrontVisibility(!isFrontVisible);
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">
          {isFrontVisible ? props.card.front : props.card.back}
        </h5>
        <button className="btn btn-outline-secondary btn-block" onClick={onFlipClick}>
          flip
        </button>
        {!isFrontVisible && (
          <>
            <br />
            <div className="btn-group btn-block" role="group">
              <button className="btn btn-danger">hard</button>
              <button className="btn btn-success">easy</button>
            </div>
          </>
        )}
      </div>
      <div class="card-footer text-muted">
        {isFrontVisible ? "front" : "back"}
      </div>
    </div>
  );
};
