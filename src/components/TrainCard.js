import React from 'react';

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h3>{train.name}</h3>
      <p>Departure: {train.departure}</p>
      {/* Add more train details */}
    </div>
  );
}

export default TrainCard;
