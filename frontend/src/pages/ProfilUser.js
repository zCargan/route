import React from "react";
import { useLocation } from "react-router-dom";
import ButtonFollow from "../components/BoutonFollow";

function Profil(){

    const userId = useLocation();
    

    return(
        <div>
            <ButtonFollow/>
            <p className="userName">{userId.state.username}</p>
            <ul>
            {userId.state.objectifs.map((objectif) =>
                <li className="objectifsUser"><p className="titre-objectifs">{objectif}</p></li>
            )}
            </ul>
        </div>
    )
}

export default Profil;
