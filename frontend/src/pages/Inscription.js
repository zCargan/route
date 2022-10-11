import React from 'react';
import Connection from '../components/Connection';

const Inscription = () => {
    return (
        <div>
            <div>
                <p>Bienvenue sur la page d'inscription</p>
            </div>
            <div>
            </div>
            <div>
                <p>
                    Vous pourrez ici vous créer un compte afin de finaliser votre inscription
                </p>
                <form action>
                    <input type="string" placeholder='Adresse email' />
                </form>
                <Connection/>
            </div>


        </div>

    );
};

export default Inscription;