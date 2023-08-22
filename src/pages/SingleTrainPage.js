import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainDetails from '../components/TrainDetails';
import { useParams } from 'react-router-dom';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios.get(`your-backend-api-url/trains/${trainId}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [trainId]);

  return (
    <div>
      <h1>Train Details</h1>
      {train && <TrainDetails train={train} />}
    </div>
  );
};

export default SingleTrainPage;
