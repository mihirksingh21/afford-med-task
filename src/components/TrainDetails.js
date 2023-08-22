import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const TrainDetails = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Train {train.trainNumber}</Typography>
        <Typography>Departure: {train.departureTime}</Typography>
        <Typography>Arrival: {train.arrivalTime}</Typography>
        <Typography>Delay: {train.delay} min</Typography>
        <Typography>Class: {train.class}</Typography>
        <Typography>Price: {train.price}</Typography>
        <Typography>Availability: {train.seatAvailability}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainDetails;
