import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://20.244.56.144/train/trains')
      .then(response => {
        setTrains(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Trains</h2>
      {trains.map(train => (
        <div key={train.id}>
          <p>Name: {train.name}</p>
          <p>Departure: {train.departure}</p>
          {/* Add more train details */}
        </div>
      ))}
    </div>
  );
}

export default TrainList;
