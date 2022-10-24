import React from "react";
import { useLocation } from "react-router-dom";

function Profil(){

    const userId = useLocation();


    return(
        <div>
            <p>{userId.state._id}</p>
            <p>{userId.state.username}</p>
            <p>{userId.state.objectifs}</p>
        </div>
    )
}

export default Profil;
