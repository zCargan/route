import React, { useState } from 'react';
import axios from 'axios';
import "../styles/connection.css"
import "../styles/App.css"
//import { response } from '../../../backend/app';

const Connection = () => {


    const [email, setEmail] = useState(null)
    const [mdp, setMdp] = useState(null)

    const login_verfif = async (e) => {
        e.preventDefault();
        let values = {
            email :email,
            mdp :mdp
        };
        axios.post("http://localhost:3001/user", values, { withCredentials: true })
            .then(response => {
                alert("Vous êtes connecté")
            });
    }



    return (

                <div id="connection">
                    <h2>Se connecter</h2>
                    <form className='form_connection'>
                        <div className="text_zone">
                            <i className="fa-sharp fa-solid fa-envelope"></i>
                            <input type="string" placeholder='Email du compte' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="text_zone">
                            <i className="fa-sharp fa-solid fa-lock"></i>
                            <input type="string" placeholder='Mot de passe' onChange={(e) => setMdp(e.target.value)} />
                        </div>
                        <div className="text_zone_button" onClick={login_verfif}>
                                Connection
                        </div>
                        <div className="text_zone_button">
                                Mot de passe oublié ?
                        </div>
                    </form>
                </div>

    );
};

export default Connection;