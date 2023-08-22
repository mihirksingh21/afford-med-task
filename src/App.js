import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [authorizationToken, setAuthorizationToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTUxOTcsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNjU4ZjE4ZmItODEyYS00YWRlLWE0MjQtMjg5MmUxMGRkZmQ3Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlJBMjAxMTAwMzAxMDg4OCJ9.GvXsFakR4wNSNzWt7WqKUfHnNw4A5y7OrC66L_nnyVY');

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get('http://20.244.56.144/train/trains', {
        headers: {
          Authorization: `Bearer ${authorizationToken}`
        }
      });
      setTrains(response.data);
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  };

  const fetchSelectedTrain = async (trainNumber) => {
    try {
      const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
        headers: {
          Authorization: `Bearer ${authorizationToken}`
        }
      });
      setSelectedTrain(response.data);
    } catch (error) {
      console.error('Error fetching selected train:', error);
    }
  };

  return (
    <div className="App">
      <h1>Train Booking App</h1>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber} onClick={() => fetchSelectedTrain(train.trainNumber)}>
            {train.trainName}
          </li>
        ))}
      </ul>
      {selectedTrain && (
        <div>
          <h2>{selectedTrain.trainName}</h2>
          {/* Display selected train details */}
        </div>
      )}
    </div>
  );
}

export default App;