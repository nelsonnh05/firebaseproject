import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import AdminScreen from './screens/AdminScreen';
import PlayersScreen from './screens/PlayersScreen';
import TenuesScreen from './screens/TenuesScreen';
import Histoire from './screens/Histoire';
import Victoire from './screens/Victoire';
import PremierM from './screens/PremierM';
import MainPage from './screens/MainPage';
import Legendes from './screens/Legendes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/victoire" element={<Victoire />} />
        <Route path="/premier" element={<PremierM />} />
        <Route path="/admin/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/player" element={<PlayersScreen />} />
        <Route path="/tenues" element={<TenuesScreen />} />
        <Route path="/legendes" element={<Legendes />} />
        {/* Autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
