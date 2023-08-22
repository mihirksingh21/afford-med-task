import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainList from './components/TrainList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrainList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
