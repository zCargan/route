import '../styles/App.css'
import '../styles/objectifs.css'
import '../styles/profil.css'
import PopupProfil from '../components/PopupProfil.js'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Profil() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");


    let nouveauxObjectifs = [];

    const navigateToHome = () => {
        navigate('/home');
      };

    useEffect(() => {
        axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(res => {
            for (let i = 0; i < res.data; i++){
                nouveauxObjectifs.push(res.data.objectifs[i])
            }
            setData(res.data.objectifs)
            setUsername(res.data.username)
            setEmail(res.data.email)

        })}, []);

    // useEffect(() => {
    //     axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(response => {
    //         //console.log("1" +response.data.objectifs)
    //         setData(response.data.objectifs)
    //         //console.log(data)
    //     }).catch(err => console.log(err));
    // })

    function deconnexion(){
        axios.get('http://localhost:3001/deletecookie', { withCredentials: true })
        .then( res => {      
            document.cookie = ""
            console.log(document.cookie)
            navigateToHome()
        window.location.reload(false)}
        )
    }

    return (
        <>
        <div className='profil'>
        <h2>Mon profil :</h2>
            <i className="fa-solid fa-circle-user"></i>
            <div className='text'>
                <p className="username">Pseudonyme : {username}</p>
                <p className="email">Adresse email : {email}</p>
            </div>
            <PopupProfil />
        </div>
        <h2 className='objectifs-profil'>Mes objectifs</h2>
            <ul>
                {data.map((objectif) =>
                    <li key={objectif} className="objectifs"> <p className="titre-objectifs">{objectif}</p><i className="fa-solid fa-circle-xmark"></i></li>
                )}
            </ul>
            <p className="deconnexion" onClick={deconnexion}>
                    Déconnexion
            </p>
        </>
    );
}

export default Profil;