import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './pages/Home';
import Planos from './pages/Planos';
import Gratuito from './pages/Gratuito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/gratuito" element={<Gratuito />} />
      </Routes>
    </Router>
  )
}

export default App
