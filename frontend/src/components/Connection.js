import React, { useState } from 'react';
import axios from 'axios';
import "../styles/connection.css"

const Connection = () => {

    /*=========================================== VARIABLES DE CONNECTION ===========================================*/ 
    const [email, setEmail] = useState(null)
    const [mdp, setMdp] = useState(null)

    /*=========================================== RECUPERE LES VARIABLES DE CONNECTION ===========================================*/ 
    const test = async (e) => {
        e.preventDefault();
        let values = {
            email :email,
            mdp :mdp
        };
        axios
            .post("http://localhost:3010/user", values)
            .then(response => {
                console.log({ response })
            });
        console.log( values )
    }


    /*=========================================== FONCTION DE REDIRECTION ===========================================*/ 

    return (
            <div id="bloc_user">
                <div id="connection">
                    <p><h2>Se connecter</h2></p>
                    <form className='form_connection'>
                        <div>
                            <p>Adresse email du compte</p>
                            <input type="string" placeholder='Email du compte' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <p>Mot de passe du compte</p>
                            <input type="string" placeholder='Mot de passe' onChange={(e) => setMdp(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={test}>
                                Connection
                            </button>
                        </div>
                        <div>
                            <p>
                                Mot de passe oublié?
                            </p>
                            <button>
                                Mot de passe oublié?
                            </button>
                        </div>
                    </form>
                </div>
                <div id="inscription">
                    <p><h2>Pas encore de compte ? Inscrivez-vous !</h2></p>
                    <form className='form_inscription'>
                        <div>
                            <p>Nom d'utilisateur</p>
                            <input type="string" placeholder="Nom d'utilisateur" onChange={(e) => setMdp(e.target.value)} />
                        </div>
                        <div>
                            <p>Adresse email du compte</p>
                            <input type="string" placeholder='Email du compte' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <p>Mot de passe du compte</p>
                            <input type="string" placeholder='Mot de passe' onChange={(e) => setMdp(e.target.value)} />
                        </div>
                        <div>
                            <p>Confirmer mot de passe</p>
                            <input type="string" placeholder='Confirmer le mot de passe' onChange={(e) => setMdp(e.target.value)} />
                        </div>

                    </form>
                </div>
            </div>
    );
};

export default Connection;