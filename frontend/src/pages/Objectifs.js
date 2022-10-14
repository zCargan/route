import '../styles/App.css'
import '../styles/objectifs.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Objectifs() {
    const [data, setData] = useState([]);
    const [searchedObjectifs, setSearchedObjectifs] = useState("")
    const [baseData, setBaseData] = useState([]);

    let nouveauxObjectifs = [];
    let query_choisie;

    useEffect(() => {
        axios.get('http://localhost:3001/user', {params: {"prenom" : "Louis"}}).then(res => {
            for (let i = 0; i < res.data.objectifs.length; i++){
                nouveauxObjectifs.push(res.data.objectifs[i])
            }
        })});

    function ajouterObjectifs(params) {
        if (nouveauxObjectifs.indexOf(params.objectif) < 0) {
            nouveauxObjectifs.push(params.objectif);
        } else {
            alert("L'objectif choisi a déjà été ajouté !")
            return
        }
        query_choisie = {Prenom : "Louis", objectifs : nouveauxObjectifs}
        console.log(query_choisie)
        axios.post("http://localhost:3001/user/objectif", query_choisie).then(alert("Objectif ajouté avec succès !"))
        window.location.reload(false);
    };

    const rechercherObjectifs = async (e) => {
        let newData = [];
        setData(baseData)
        console.log(data)

        e.preventDefault();
        const infos  = {
            params : {
                objectif: searchedObjectifs
            }
        }
        for (let i = 0; i < data.length; i++) {
            if (data.length !== baseData.length){
                setData(baseData)
            } else {
                if (data[i].objectif.toLowerCase().includes(searchedObjectifs.toLowerCase())){
                    newData.push(data[i])
                }
            }
        }
        setData(newData)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/objectif').then(res => {
           setData(res.data)
           setBaseData(res.data)
        }).catch(err => console.log(err));
    }, [])
    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Recherche" className="searchedObjectifs" onChange={(e) => setSearchedObjectifs(e.target.value)}></input>
                <p className="searchedObjectifsButton" onClick={rechercherObjectifs}>Rechercher</p>
            </div>
            <ul>
                {data.map((objectif) =>
                    <li key={objectif._id} className="objectifs"> <p className="titre-objectifs">{objectif.objectif}</p><i className="fas fa-circle-plus" onClick={() => {ajouterObjectifs(objectif)}}></i></li>
                )}
            </ul>
        </>
    );
}

export default Objectifs;