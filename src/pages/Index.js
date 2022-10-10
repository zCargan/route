import React from 'react';
import Connection from '../components/Connection';
import Navigation from '../components/Navigation';



const Home = () => {
    return (
        <div className='page_index'>
            <h1 className='index_accueil'>MeNew</h1>
            <Navigation />
            <Connection />
            <p>contenu de la page d'index</p>
        </div>
    );
};

export default Home;