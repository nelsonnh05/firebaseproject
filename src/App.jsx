import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import LegendsScreen from './screens/LegendsScreen';
import HistoryScreen from './screens/HistoryScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/legendes" element={<LegendsScreen />} />
        <Route path="/histoire" element={<HistoryScreen />} />

        {/* Autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
