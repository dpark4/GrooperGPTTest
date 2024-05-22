// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GrooperPage from './GrooperPage'; // Import the GrooperPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GrooperPage />} /> {/* Make GrooperPage the home page */}
      </Routes>
    </Router>
  );
};

export default App;
