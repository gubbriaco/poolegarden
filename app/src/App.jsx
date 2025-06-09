import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Servizi from './components/Servizi.jsx';
import Contattaci from './components/Contattaci.jsx';
import Piscine from './components/Piscine.jsx';
import ImpiantiIrrigazione from './components/ImpiantiIrrigazione.jsx';
import Prati from './components/Prati.jsx';
import RealizzazionePiscine from './components/RealizzazionePiscine.jsx';
import ManutenzionePiscine from './components/ManutenzionePiscine.jsx';
import RealizzazioneIrrigazione from './components/RealizzazioneIrrigazione.jsx';
import ManutenzioneIrrigazione from './components/ManutenzioneIrrigazione.jsx';


function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/contattaci" element={<Contattaci />} />

        <Route path="/servizi" element={<Servizi />} />

        <Route path="/piscine" element={<Piscine />} />
        <Route path="/piscine-realizzazione" element={<RealizzazionePiscine />} />
        <Route path="/piscine-manutenzione" element={<ManutenzionePiscine />} />

        <Route path="/irrigazione" element={<ImpiantiIrrigazione />} />
        <Route path="/irrigazione-realizzazione" element={<RealizzazioneIrrigazione />} />
        <Route path="/irrigazione-manutenzione" element={<ManutenzioneIrrigazione />} />
        
        <Route path="/prati" element={<Prati />} />

      </Routes>
    </Router>
  );

}

export default App;
