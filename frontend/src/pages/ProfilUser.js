import React from "react";
import { useLocation } from "react-router-dom";
import ButtonFollow from "../components/BoutonFollow";

function ProfilUser(){

    const userId = useLocation();
    

    return(
        <div>
            <ButtonFollow/>
            <p className="userName">{userId.state.username}</p>
            <ul>
            {userId.state.objectifs.map((objectif) =>
                <li key={objectif._id} className="objectifsUser"><p className="titre-objectifs">{objectif}</p></li>
            )}
            </ul>
        </div>
    )
}

export default ProfilUser;
