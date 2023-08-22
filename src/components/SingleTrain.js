import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SingleTrain() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios.get(`http://20.244.56.144/train/trains/${id}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Name: {train.name}</p>
      <p>Departure: {train.departure}</p>
      {/* Add more train details */}
    </div>
  );
}

export default SingleTrain;
