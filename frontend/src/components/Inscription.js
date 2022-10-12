import React, { useState } from 'react';
import axios from 'axios';
import "../styles/inscription.css"
import "../styles/App.css"

const Inscription = () => {
    
    const [email, setEmail] = useState(null)
    const [mdp, setMdp] = useState(null)

    const test = async (e) => {
        e.preventDefault();
        let values = {
            email :email,
            mdp :mdp
        };
        axios
            .post("http://localhost:3001/user", values)
            .then(response => {
                console.log({ response })
            });
        console.log( values )
    }

    return (
        <div id="inscription">
        <h2>Pas encore de compte ? Inscrivez-vous !</h2>
        <form className='form_inscription'>
            <div className="text_zone">
                <i className='fa-sharp fa-solid fa-user'></i>
                <input type="string" placeholder="Nom d'utilisateur" onChange={(e) => setMdp(e.target.value)} />
            </div>
            <div className="text_zone">
                <i class="fa-sharp fa-solid fa-envelope"></i>
                <input type="string" placeholder='Email du compte' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="text_zone">
                <i class="fa-sharp fa-solid fa-lock"></i>
                <input type="string" placeholder='Mot de passe' onChange={(e) => setMdp(e.target.value)}/>
            </div>
            <div className="text_zone">
                <i class="fa-sharp fa-solid fa-lock"></i>
                <input type="string" placeholder='Confirmer le mot de passe' onChange={(e) => setMdp(e.target.value)}/>
            </div>
            <div className="text_zone_button">
                S'inscrire
            </div>

        </form>
        </div>
        );
    };
    export default Inscription;