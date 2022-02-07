import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Logement from './pages/Logement'
import EnTete from './composants/EnTete'
import PiedDePage from './composants/PiedDePage'
import Erreur404 from './composants/Erreur404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <EnTete />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <PiedDePage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
