import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Objectifs from './pages/Objectifs';
import Inscription from './pages/Inscription';
import Navbar from './components/navbar';
import Default from './pages/default';
import './styles/App.css'


const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <div className="element">
            <Navbar className="navbar"/>
        </div>
        <div className="element">
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/objectifs" element={<Objectifs />} className="objectifs"/>
            {/* page par défault  */}
            <Route path="*" element={<Default />} />
            <Route path="/inscription" element={<Inscription />}/>
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;