import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

const Ville = () => {

    const [nouvelle_ville, setNouvelleVille] = useState("");
    const [villes, setVilles] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:3001/ville").then(response => {
            let array = [];
            for (let i = 0; i < response.data.length; i++) {
                array.push(response.data[i].nouvelle_ville)
                setVilles(array)
            }
        });
    }, [])




    const save_ville = async (e) => {

    }


    const variables = async (e) => {
        if (nouvelle_ville === "") {
            alert("Veuillez entrez un nom de ville valide")
        } else {
            e.preventDefault();
            const data = {
                nouvelle_ville
            }
            axios.post("http://localhost:3001/ville", data)
        }
    };

    return (
        <div>
            <select name="">
                <option value="">Veuillez séléctionnez votre ville</option>
                {villes.map((ville) => (
                    <option>{ville}</option>
                ))}
            </select>
            <button onClick={save_ville}>Valider ma ville</button>
            <div>
                <label>Ville absente?</label>
                <input type="text" placeholder="Nom de la ville" onChange={(e) => setNouvelleVille(e.target.value)} />
                <button onClick={variables}>Ajouter</button>
            </div>
        </div>
    );
};

export default Ville;