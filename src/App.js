import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Api from './pages/Api';
import Inscription from './pages/Inscription';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/about" element={<About />}></Route>
        <Route path="/api" element={<Api />}></Route>
        {/* page par défault  */}
        <Route path="*" element={<Index />} />
        <Route path="/inscription" element={<Inscription />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;