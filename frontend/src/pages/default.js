import React from 'react';
import BarreRecherche from '../components/BarreDeRecherche';




const Default = () => {

    return (
        <div className='div_global'>
            <div>
            <BarreRecherche/>                <p className='bienvenue_text'>
                    Bienvenue sur la page d'accueil du site
                </p>
            </div>
        </div>
    );
};

export default Default;