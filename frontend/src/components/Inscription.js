import React, { useState } from 'react';
import axios from 'axios';
import "../styles/inscription.css"
import "../styles/App.css"
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");



    /*=========================================== RECUPERE LES VARIABLES DE CREACTION DE COMPTE ===========================================*/
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    };

    const variables = async (e) => {
        e.preventDefault();
        const infos = {
            username,
            email,
            password,
            samePassword
        }

        const données_envoyées = {
            "username": username,
            "email": email,
            "password": password,
            "confirmed": false,
            "objectifs": [],
            "city": ""
        }

        //variable nécessaire afin d'effectuer à la requete à la db afin de savoir si l'email est déja utilisé ou non


        function checkEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }


        if ((username === "") || (email === "") || (password === "") || (samePassword === "")) {
            alert("Veuillez compléter tous les champs");
        } else {
            axios.post("http://localhost:3001/user/username", infos)
                .then(response => {
                    if (response.data === false) {
                        alert("Username already used");
                    } else {
                        if (checkEmail(email)) {
                            axios.post("http://localhost:3001/user/email", infos)
                                .then(response => {
                                    if (response.data === false) {
                                        alert("Email already used")
                                    } else {
                                        if (password === samePassword) {
                                            if (Number(password.length) < 12) {
                                                alert("Mot de passe trop court")
                                            } else {
                                                axios
                                                    .post("http://localhost:3001/user/inscription", données_envoyées)
                                                    .then(response => {
                                                        if (response.status === 201) {
                                                            emailjs.sendForm('service_wco0ss6', 'template_f9ar9zo', e.target, 'uX_z-9_6PbAb24o0e')
                                                                .then((result) => {
                                                                    console.log(result.text);
                                                                }, (error) => {
                                                                    console.log(error.text);
                                                                });
                                                            e.target.reset()
                                                            alert("Compte créer ! Un email de confirmation vous a été envoyé")
                                                            navigateToHome()
                                                        }
                                                    });
                                            }
                                        } else {
                                            alert("Vos deux mots de passe ne correspondent pas")
                                        }
                                    }
                                })
                        } else {
                            alert("Votre adresse email n'est pas valide")
                        }
                    }
                });

        }
    }
    return (
        <div className="inscription">
            <h2>Pas encore de compte ? Inscrivez-vous !</h2>
            <form className='form_inscription' onSubmit={variables}>
                <div className="text_zone">
                    <i className='fa-sharp fa-solid fa-user'></i>
                    <input type="string" placeholder="Nom d'utilisateur" name='username' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="text_zone">
                    <i className="fa-sharp fa-solid fa-envelope"></i>
                    <input type="string" placeholder='Email du compte' name='user_email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="text_zone">
                    <i className="fa-sharp fa-solid fa-lock"></i>
                    <input type="password" placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="text_zone">
                    <i className="fa-sharp fa-solid fa-lock"></i>
                    <input type="password" placeholder='Confirmer le mot de passe' onChange={(e) => setSamePassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" className="button_submit" value="Valider" />
                </div>
                {/* <div className="text_zone_button" onClick={variables}>
                S'inscrire
                </div> */}
            </form>
        </div>
    );
};
export default Inscription;