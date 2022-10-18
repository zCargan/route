<<<<<<< HEAD
import React from 'react'
import "../styles/default.css"
import ReactPlayer from 'react-player'
import RGPD from '../components/RGPD';
=======
import '../styles/default.css'
import React from 'react'
import BulleProfil from '../components/BulleProfil';
>>>>>>> 9be27f1 (ajout d'un component profi)


const Default = () => {

<<<<<<< HEAD
    function test() {
        console.log("hello")
    }

=======
>>>>>>> 9be27f1 (ajout d'un component profi)
    return (
        <div className='div_global'>
            <div>
                <p className='bienvenue_text'>
<<<<<<< HEAD
                    NEWME
                </p>
            </div>
            <div>
                <p>
                    NewMe est un projet étudiant dans le cadre d'un cours.

                    Nous avons voulu pousser la communauté 
                </p>
            </div>
            <div>
                <RGPD />
            </div>
        </div >
=======
                    Bienvenue sur la page d'accueil du site
                </p>
            </div>
            <BulleProfil />
        </div>
>>>>>>> 9be27f1 (ajout d'un component profi)
    );
};

export default Default;