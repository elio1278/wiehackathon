import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LifeStage from './pages/LifeStage';
import NutritionPlan from './pages/NutritionPlan';
import CycleSync from './pages/CycleSync';
import SmartPlate from './pages/SmartPlate';
import Navigation from './components/Navigation';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life-stage" element={<LifeStage />} />
            <Route path="/plan/:stage" element={<NutritionPlan />} />
            <Route path="/cycle-sync" element={<CycleSync />} />
            <Route path="/smart-plate" element={<SmartPlate />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 