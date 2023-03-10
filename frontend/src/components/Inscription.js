import React, { useState } from 'react';
import axios from 'axios';
import "../styles/inscription.css"
import "../styles/App.css"
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'


export function notXSSInjection(string) {
    return !(string.includes("<"))
}

export function notToLongString(string) {
    return (string.length < 30)
}

export function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function allComplete(string1, string2, string3, string4) {
    return !((string1 === "") || (string2 === "") || (string3 === "") || (string4 === ""))
}

export function allNotToLong(string1, string2, string3, string4) {
    return (notToLongString(string1) && notToLongString(string2) && notToLongString(string3) && notToLongString(string4))
}

export function allNotXSSInjection(string1, string2, string3, string4) {
    return (notXSSInjection(string1) && notXSSInjection(string2) && notXSSInjection(string3) && notXSSInjection(string4))
}

export function sameString(string1, string2) {
    return (string1 === string2)
}

export function HasValidLength(string) {
    return (string.length >= 12)
}

export function HasLowerCaseLetter(string) {
    return (/[a-z]/.test(string))
}

export function HasUpperCaseLetter(string) {
    return (/[A-Z]/.test(string))
}

export function HasSpecialCharacter(string) {
    return (/[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(string))
}

export function HasNumber(string) {
    return (/[0-9]/.test(string))
}

export function HasAll(string) {
    return (HasValidLength(string) && HasLowerCaseLetter(string) && HasUpperCaseLetter(string) && HasSpecialCharacter(string) && HasNumber(string))
}

const Inscription = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");
    const passwordHasValidLength = HasValidLength(password);
    const passwordHasLowercaseLetter = HasLowerCaseLetter(password);
    const passwordHasUppercaseLetter = HasUpperCaseLetter(password);
    const passwordHasSpecialCharacter = HasSpecialCharacter(password);
    const passwordHasNumber = HasNumber(password);
    const hashedPassword = bcrypt.hashSync(password, 10);


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
        const donn??es_envoy??es = {
            "username": username,
            "email": email,
            "password": hashedPassword,
            "confirmed": false,
            "objectifs": [],
            "city": ""
        }

        //variable n??cessaire afin d'effectuer ?? la requete ?? la db afin de savoir si l'email est d??ja utilis?? ou non


        if (allComplete(username, email, password, samePassword)) {
            if (allNotToLong(username, email, password, samePassword)) {
                if (allNotXSSInjection(username, email, password, samePassword)) {
                    if (HasAll(password)) {
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
                                                    if (sameString(password, samePassword)) {
                                                        if (HasValidLength(password)) {
                                                            axios
                                                                .post("http://localhost:3001/user/inscription", donn??es_envoy??es)
                                                                .then(response => {
                                                                    if (response.status === 201) {
                                                                        emailjs.sendForm('service_wco0ss6', 'template_f9ar9zo', e.target, 'uX_z-9_6PbAb24o0e')
                                                                            .then((result) => {
                                                                                console.log(result.text);
                                                                            }, (error) => {
                                                                                console.log(error.text);
                                                                            });
                                                                        e.target.reset()
                                                                        alert("Compte cr???? ! Un email de confirmation vous a ??t?? envoy??")
                                                                        navigateToHome()
                                                                    }
                                                                });
                                                        } else {
                                                            alert("Mot de passe trop court")
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
                    } else {
                        alert("Votre mot de passe ne respecte pas tous les crit??res")
                    }
                } else {
                    alert("Pas de < autoris?? dans vos informations")
                }
            } else {
                alert("Les informations que vous rentrer sont trop longue")
            }

        } else {
            alert("Veuillez compl??ter tous les champs");
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
                <div className='text_zone'>
                    <label style={{ color: passwordHasValidLength ? 'green' : 'red' }}>Mot de passe de 12 caract??res </label>
                    <br />
                    <label style={{ color: passwordHasLowercaseLetter ? 'green' : 'red' }}>Min 1 caract??re minuscule</label>
                    <br />
                    <label style={{ color: passwordHasUppercaseLetter ? 'green' : 'red' }}>Min 1 caract??re majuscule</label>
                    <br />
                    <label style={{ color: passwordHasNumber ? 'green' : 'red' }}>Min 1 nombre</label>
                    <br />
                    <label style={{ color: passwordHasSpecialCharacter ? 'green' : 'red' }}>Min 1 caract??re sp??cial</label>
                </div>
                <div className="text_zone">
                    <i className="fa-sharp fa-solid fa-lock"></i>
                    <input type="password" placeholder='Confirmer le mot de passe' onChange={(e) => setSamePassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" className="button_submit" value="Valider" />
                </div>
            </form>
        </div>
    );
};
export default Inscription; 