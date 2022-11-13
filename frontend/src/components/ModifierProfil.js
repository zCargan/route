import React, { useState ,useEffect} from 'react';
import "../styles/App.css"
import axios from 'axios'

const ModifierProfil = () => {
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        axios.get('http://localhost:3001/user', {params: {"id" : document.cookie}}).then(res => {
            setPseudo(res.data.username)
            setEmail(res.data.email)
        })}, []);
    function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const test = async (e) => {
        e.preventDefault();
        const infos = {
            id : document.cookie,
            username : pseudo,
            email : email
        }
        if(checkEmail(infos.email)){
            if(infos.username === ""){
                alert("Veillez entrer votre Pseudo")
            }
            else if(infos.email === ""){
                alert("Veillez entrer votre Email")
            }

            else{
                axios.post('http://localhost:3001/updateUser', infos)
            }
        }
        else{
            alert("Email entré incorrect")
        }
    }
    return(
             <form className="formulaireProfil" onSubmit={test}>
                <h2>Mon profil :</h2>
                <label>Pseudonyme :</label>
                <input type="text" className="username" onChange={(e) => setPseudo(e.target.value)} placeholder={pseudo}/>
                <br></br>
                <label>Adresse email : </label>
                <input type="text" className="email" onChange={(e) => setEmail(e.target.value)} placeholder={email}/>
                <input type="submit" className="button_submit" value="Valider"/>
            </form>  
    )
};
export default ModifierProfil;