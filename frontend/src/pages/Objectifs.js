import '../styles/App.css'
import '../styles/objectifs.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function ajouterObjectifs(params) {
    //let nouveauxObjectifs = ["Apprendre l'anglais"];
    let nouveauxObjectifs = [];
    let query_choisie;
    if(params=="") {
        return "Veuillez entrer un objectif !"
    }
    else if (nouveauxObjectifs.indexOf(params.objectif) < 0) {
        nouveauxObjectifs.push(params.objectif);
        query_choisie = {"id" : document.cookie, objectifs : nouveauxObjectifs}
        axios.post("http://localhost:3001/user/objectif", query_choisie).then(alert("Objectif ajouté avec succès !"))
        window.location.reload(false);
        return nouveauxObjectifs;
    } else {
        return "L'objectif a déjà été ajouté"
    }}

function Objectifs() {
    const [data, setData] = useState([]);
    const [baseData, setBaseData] = useState([]);
    const [searchedObjectifs, setSearchedObjectifs] = useState("")

    let nouveauxObjectifs = [];

    useEffect(() => {
        axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(res => {
            for (let i = 0; i < res.data.objectifs.length; i++){
                nouveauxObjectifs.push(res.data.objectifs[i])
            }
        })});

    // function ajouterObjectifs(params) {
    //     if(params=="") {
    //         return "Veuillez entrer un objectif !"
    //     }
    //     else if(nouveauxObjectifs.indexOf(params.objectif) < 0) {
    //         nouveauxObjectifs.push(params.objectif);
    //     } else {
    //         alert("L'objectif choisi a déjà été ajouté !")
    //         return
    //     }
    //     query_choisie = {"id" : document.cookie, objectifs : nouveauxObjectifs}
    //     axios.post("http://localhost:3001/user/objectif", query_choisie).then(alert("Objectif ajouté avec succès !"))
    //     window.location.reload(false);
    // };

    const rechercherObjectifs = async (e) => {
        let newData = [];
        setData(baseData)

        e.preventDefault();
        const infos  = {
            params : {
                objectif: searchedObjectifs
            }
        }
        console.log(searchedObjectifs)
        for (let i = 0; i < baseData.length; i++) {
            console.log(baseData[i].objectif)
            if (searchedObjectifs === "") {
                newData.push(baseData[i])
            } else if (baseData[i].objectif.toLowerCase().includes(searchedObjectifs.toLowerCase())){
                newData.push(baseData[i])
                console.log(baseData[i].objectif.toLowerCase().includes(searchedObjectifs.toLowerCase()))
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