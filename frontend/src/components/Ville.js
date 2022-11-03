import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import "../styles/ville.css"

const Ville = () => {
    // ============================================================ CONSTANTES ============================================================
    const [nouvelle_ville, setNouvelleVille] = useState("");
    const [villes, setVilles] = useState([]);
    const [villeUser, setVilleUser] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmed, setConfirmed] = useState("");
    const [objectifs, setObjectifs] = useState("");
    const [city, setCity] = useState("");


    const donnees_a_jour = {
        "username": username,
        "email": email,
        "password": password,
        "confirmed": confirmed,
        "objectifs": objectifs,
        "city": city
    }


    useEffect(() => {
        axios.get("http://localhost:3001/ville").then(response => {
            let array = [];
            for (let i = 0; i < response.data.length; i++) {
                array.push(response.data[i].nouvelle_ville)
                setVilles(array)
            }
        });
        axios.get('http://localhost:3001/user', { params: { "id": document.cookie } }).then(res => {
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setObjectifs(res.data.objectifs)
            setConfirmed(res.data.confirmed)
            setCity(res.data.city)
        })
    }, [])

    const validation = async (e) => {

        console.log(donnees_a_jour)
        axios
            .post("http://localhost:3001/update_profil", donnees_a_jour)
            .then(response => console.log(response))
    }




    const variables = async (e) => {
        console.log(city)
        if (nouvelle_ville === "") {
            alert("Veuillez entrez un nom de ville valide")
        } else {

        }
    };


    // ============================================================ AJOUTER NOUVELLES VILLES ============================================================
    const add_new_city = async (e) => {
        e.preventDefault();
        const data = {
            nouvelle_ville
        }
        axios.post("http://localhost:3001/ville", data)
    }



    // ============================================================ RENVOIE LA PAGE HTML ============================================================
    return (
        <div>
            <br />
            <label>Votre Ville : </label>
            <select value={city} onChange={e => setCity(e.target.value)}>
                <option>Veuillez séléctionnez votre ville</option>
                {villes.map((ville) => (
                    <option>{ville}</option>
                ))}
            </select>
            <br />
            <br />
            <div>
                <label>Ville absente? </label>
                <input type="text" placeholder="Nom de la ville" onChange={(e) => setNouvelleVille(e.target.value)} />
                <button onClick={add_new_city} >Ajouter</button>
            </div>
            <br />
            <div className='button_validation'>
                <label onClick={validation}>
                    Modifier mon profil
                </label>
            </div>
        </div>
    );
};

export default Ville;