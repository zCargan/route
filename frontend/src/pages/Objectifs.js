import '../styles/App.css'
import '../styles/objectifs.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Objectifs() {
    const [data, setData] = useState([]);

    let nouveauxObjectifs = [];
    let query_choisie;

    useEffect(() => {
        axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(res => {
            for (let i = 0; i < res.data.objectifs.length; i++){
                nouveauxObjectifs.push(res.data.objectifs[i])
            }
        })});

    function ajouterObjectifs(params) {
        //console.log(params)
        if (nouveauxObjectifs.indexOf(params.objectif) < 0) {
            nouveauxObjectifs.push(params.objectif);
        } else {
            alert("L'objectif choisi a déjà été ajouté !")
            return
        }
        query_choisie = {"id" : document.cookie, objectifs : nouveauxObjectifs}
        console.log( query_choisie)
        axios.post("http://localhost:3001/user/objectif", query_choisie).then(alert("Objectif ajouté avec succès !"))
        window.location.reload(false);
    };

    useEffect(() => {
        axios.get('http://localhost:3001/objectif').then(res => {
           setData(res.data)
        }).catch(err => console.log(err));
    }, [])
    return (
        <ul>
            {data.map((objectif) =>
                <li key={objectif._id} className="objectifs"> <p className="titre-objectifs">{objectif.objectif}</p><i className="fas fa-circle-plus" onClick={() => {ajouterObjectifs(objectif)}}></i></li>
            )}
        </ul>
    );
}

export default Objectifs;