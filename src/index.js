import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Logement from './pages/Logement'
import EnTete from './composants/EnTete'
import PiedDePage from './composants/PiedDePage'
import Erreur404 from './composants/Erreur404'
import Disposition from './composants/Disposition'

window.mesLogements = []

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Disposition>
      <EnTete />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/logement/:indexLogement" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <PiedDePage />
      </Disposition>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
