<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/connection.css"
import "../styles/App.css"
//import { response } from '../../../backend/app';

const Connection = () => {


    const [email, setEmail] = useState(null)
    const [mdp, setMdp] = useState(null)
    const navigate = useNavigate();

    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/home');
    };

    const login_verfif = async (e) => {
        e.preventDefault();
        let values = {
            email: email,
            mdp: mdp
        };
        axios.post("http://localhost:3001/user/login", values, { withCredentials: true })
            .then(response => {
                alert("Vous êtes connecté")
                navigateToHome()
                window.location.reload(false)
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
                    <input type="password" placeholder='Mot de passe' onChange={(e) => setMdp(e.target.value)} />
                </div>
                <div className="text_zone_button" onClick={login_verfif}>
                    Connexion
                </div>
                <div className="text_zone_button">
                    Mot de passe oublié ?
                </div>
            </form>
        </div>

);
};

=======
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

>>>>>>> 8d6e484 (Add files via upload)
export default Connection;