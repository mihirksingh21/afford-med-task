const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

const AUTHORIZATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTUxOTcsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNjU4ZjE4ZmItODEyYS00YWRlLWE0MjQtMjg5MmUxMGRkZmQ3Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlJBMjAxMTAwMzAxMDg4OCJ9.GvXsFakR4wNSNzWt7WqKUfHnNw4A5y7OrC66L_nnyVY';

app.use(express.json());

app.get('/api/trains', async (req, res) => {
  try {
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: {
        Authorization: `Bearer ${AUTHORIZATION_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching trains:', error);
    res.status(500).json({ error: 'Failed to fetch trains' });
  }
});

app.get('/api/trains/:trainNumber', async (req, res) => {
  const trainNumber = req.params.trainNumber;
  try {
    const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${AUTHORIZATION_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching selected train:', error);
    res.status(500).json({ error: 'Failed to fetch selected train' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});