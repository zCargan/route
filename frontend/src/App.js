import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Objectifs from './pages/Objectifs';
import Page_compte from './pages/Page_compte';
import Navbar from './components/navbar';
import Default from './pages/default';

import './styles/App.css'
import ProfilUsers from './pages/ProfilUser';
import NouvelObjectif from './components/NouvelObjectif';

const App = () => {
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
            <Route path="/carte" element={connecte ? <Carte /> : <Navigate to="/inscription" />} />
            <Route path='/nouvel_objectif' element={connecte ? <NouvelObjectif /> : <Navigate to="/inscription" />} />
            <Route path='/rgpd' element={<Rgpd />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;