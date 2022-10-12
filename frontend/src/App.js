import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Api from './pages/Api';
import Inscription from './pages/Inscription';
import Navbar from './components/Navbar';
import Default from './pages/default';


const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/objectifs" element={<Api />} />
        {/* page par défault  */}
        <Route path="*" element={<Default />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;