import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from '../components/TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('your-backend-api-url/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
