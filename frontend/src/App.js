import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Objectifs from './pages/Objectifs';
import Page_compte from './pages/Page_compte';
import Navbar from './components/navbar';
<<<<<<< HEAD
import Default from './pages/default';
import Profil from './pages/Profil';
import Carte from './pages/Carte';
import Rgpd from './pages/Rgpd'
=======
import Default from './pages/Default';
import Carte from './pages/Carte'
import Profil from './pages/Profil';
import './styles/App.css'
>>>>>>> 9be27f1 (ajout d'un component profi)

import './styles/App.css'
import ProfilUsers from './pages/ProfilUser';
import NouvelObjectif from './components/NouvelObjectif';

const App = () => {
  let connecte = false

  if (document.cookie !== "") {
    connecte = true
  }

  return (
    <div className="page">
      <BrowserRouter>
        <div className="element">
          <Navbar className="navbar" />
        </div>
        <div className="element">
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/about" element={<About />} />
            <Route path="/objectifs" element={connecte ? <Objectifs /> : <Navigate to="/inscription" />} className="objectifs" />
            {/* page par défault  */}
            <Route path="*" element={<Default />} />
            <Route path="/profil" element={connecte ? <Profil /> : <Navigate to="/inscription" />} />
            <Route path="/inscription" element={<Page_compte />} />
<<<<<<< HEAD
            <Route path="/carte" element={connecte ? <Carte /> : <Navigate to="/inscription" />} />
            <Route path='/nouvel_objectif' element={connecte ? <NouvelObjectif /> : <Navigate to="/inscription" />} />
            <Route path='/rgpd' element={<Rgpd />} />
=======
            <Route path="/carte" element={<Carte />} />
            <Route path="/profil" element={<Profil />} />
>>>>>>> 9be27f1 (ajout d'un component profi)
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;