// src/App.js

import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import DailyAstronomyHighlights from './components/DailyAstronomyHighlights';
import CategoriesAndSearch from './components/CategoriesAndSearch';
import SatelliteMap from './components/SatelliteMap';
import SpaceWeatherAlerts from './components/SpaceWeatherAlerts';
import Favorites from './components/Favorites'; 
import SplashScreen from './components/SplashScreen';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/Features';
import HomePage from './components/Homepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/astronomy-picture-of-the-day" element={<DailyAstronomyHighlights/>} />
        <Route path="/categories-search" element={<CategoriesAndSearch/>} />
        <Route path="/satellite-map" element={<SatelliteMap/>} />
        <Route path="/features" element={<FeaturesSection/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/space-weather-alerts" element={<SpaceWeatherAlerts/>} />
        
      </Routes>
    </Router>
 );
}

export default App;
