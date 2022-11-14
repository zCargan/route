import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Objectifs from './pages/Objectifs';
import Page_compte from './pages/Page_compte';
import Navbar from './components/navbar';
import Default from './pages/default';
import Profil from './pages/Profil';
import Carte from './pages/Carte';

import './styles/App.css'
<<<<<<< HEAD
import ProfilUsers from './pages/ProfilUser';
=======
import NouvelObjectif from './components/NouvelObjectif';
>>>>>>> dc9726a (Ajout de tests unitaires)


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
            <Route path="/about" element={<About />}></Route>
            <Route path="/objectifs" element={<Objectifs />} className="objectifs" />
            {/* page par défault  */}
            <Route path="*" element={<Default />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/inscription" element={<Page_compte />} />
            <Route path="/carte" element={<Carte />} />
<<<<<<< HEAD
            <Route path="/profilUser" element={<ProfilUsers />} />
=======
            <Route path='/nouvel_objectif' element={<NouvelObjectif />} />
>>>>>>> dc9726a (Ajout de tests unitaires)
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;