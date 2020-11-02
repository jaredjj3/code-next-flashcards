import React from "react";

export const Progress = props => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "25%" }}
      />
    </div>
  );
};
