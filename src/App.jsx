import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LegendsScreen from './screens/LegendsScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen';
import AdminScreen from './screens/AdminScreen';
import PlayersScreen from './screens/PlayersScreen';
import TenuesScreen from './screens/TenuesScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/legendes" element={<LegendsScreen />} />
        <Route path="/histoire" element={<HistoryScreen />} />
        <Route path="/admin/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/player" element={<PlayersScreen />} />
        <Route path="/tenues" element={<TenuesScreen />} />
        {/* Autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
