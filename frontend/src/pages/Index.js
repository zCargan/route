import React from 'react';
import Connection from '../components/Connection';
import Navbar from '../components/Navbar';


const Home = () => {
    return (
        <div className='page_index'>
            <h1 className='index_accueil'>MeNew</h1>
            <Navbar />
            <Connection />
            <p>contenu de la page d'index</p>
        </div>
    );
};

export default Home;