import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/formulaire_inscription.css"

const Connection = () => {

    const [email, setEmail] = useState(null)
    const [mdp, setMdp] = useState(null)
    const [goToInscription, setGoToInscription] = useState(false);

    const test = async (e) => {
        e.preventDefault();
        let values = {
            email: email,
            mdp: mdp
        };
        axios
            .post("http://localhost:3010/user", values)
            .then(response => {
                console.log({ response })
            });
        console.log(values)
    }



    return <Navigate to="/inscription" />
}



return (
    <div>
        <form className='form_connection'>
            <div>
                <p className='email'>Adresse email du compte</p>
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
            <div>
                <p>
                    pas de compte?
                </p>
                <button onClick={() => { setGoToInscription(true) }}>
                    Me créer un compte!
                </button>
            </div>
        </form>


        {/*=========================================== AFFICHE EN CONSOLE LA VALEUR DE L'INPUT ===========================================*/}
        {/* <div>
                <p>Adresse email du compte</p>
                <input type="string" placeholder='Email du compte' onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button onClick={sayName}>Click</button>
            </div> */}

    </div >
);

export default Connection;