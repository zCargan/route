import '../styles/App.css'
import '../styles/objectifs.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profil() {
    const [data, setData] = useState([]);

    let nouveauxObjectifs = [];

    useEffect(() => {

        axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(res => {
            for (let i = 0; i < res.data; i++){
                nouveauxObjectifs.push(res.data.objectifs[i])
            }
        })});

    useEffect(() => {
        axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(response => {
            //console.log("1" +response.data.objectifs)
            setData(response.data.objectifs)
            //console.log(data)
        }).catch(err => console.log(err));
    })
    return (
        <ul>
            {data.map((objectif) =>
                <li key={objectif} className="objectifs"> <p className="titre-objectifs">{objectif}</p></li>
            )}
        </ul>
    );
}

export default Profil;