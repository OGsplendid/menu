import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import { Menu } from './components/Menu/Menu';
import { HomePage } from './components/HomePage/HomePage';
import { DriftPage } from './components/DriftPage/DriftPage';
import { TimeAttackPage } from './components/TimeAttackPage/TimeAttackPage';
import { ForzaPage } from './components/ForzaPage/ForzaPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
