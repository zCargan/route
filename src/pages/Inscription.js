import React from 'react';
import Navigation from '../components/Navigation';

const Inscription = () => {
    return (
        <div>
            <div>
                <p>Bienvenue sur la page d'inscription</p>
            </div>
            <div>
                <Navigation />
            </div>
            <div>
                <p>
                    Vous pourrez ici vous créer un compte afin de finaliser votre inscription
                </p>
                <form action>
                    <input type="string" placeholder='Adresse email' />
                </form>
            </div>


        </div>

    );
};

export default Inscription;