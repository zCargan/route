import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/objectif.css'
import { useNavigate } from 'react-router-dom';

function Objectif  (objectif_name)  {
    const [name, setName] = useState("");
    const [frequence, setFrequence] = useState("");
    const [prive, setPrive] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [clique, setClique] =useState("")
    const [id, setId]=useState("")
    let jsonToSend = {}
    const navigate = useNavigate();

    useEffect(() => {
        objectif_name = "Manger moins de viande"

        let idUser = "635ba113935a45c92d42fe3d";
        axios.get(`http://localhost:3001/user/${idUser}`, { params: { "id": idUser } }).then(res => {
            for (let i=0 ; i < res.data.objectifs.length;i++){
                if (res.data.objectifs[i].name===objectif_name){
                    setName(res.data.objectifs[i].name)
                    setFrequence(res.data.objectifs[i].frequence)
                    setPrive(res.data.objectifs[i].prive)
                    i= res.data.objectifs.length
                }
            }
        })
        axios.get(`http://localhost:3001/objectif/${objectif_name}`,{ params: { "name": objectif_name } }).then(res => {
            setDescription(res.data.description)
            setType(res.data.type)
            setId(res.data._id)
        }).catch(err => console.log(err));
    }, []);

    function truc(){
        setClique(!clique)
    }

    function sendData (){
        if (prive === "False"){
            setPrive(false)
        }
        else if(prive === "True"){
            setPrive(true)
        }
        jsonToSend = {"_id":id, "type":type, "objectif":name,"description":description}
        axios.put(`http://localhost:3001/objectif/${id}`,jsonToSend)
        /*  
        console.log(name)
        console.log(frequence)
        console.log(type)
        console.log(description) 
        */
       navigateToHome()
    }

    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/profil');
      };
      
      if (clique){
        return(
            <div>
                <form className='form' onSubmit={sendData}>
                    <label>Nom</label>
                    <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                    <br></br>
                    <label>Type</label>
                    <input type="text" defaultValue={type} onChange={(e) => setType(e.target.value)}></input>
                    <br></br>
                    <label>Description</label>
                    <input type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></input>
                    <br></br>
                    <label>Frequence</label>
                    <select name="frequence" id="frequence" onChange={(e) => setFrequence(e.target.value)}>
                    <option value={frequence}>{frequence}</option>
                    <option value="Journalier">Journalier</option>
                    <option value="Hebdomadaire">Hebdomadaire</option>
                    <option value="Bimensuel">Bimensuel</option>
                    <option value="Mensuel">Mensuel</option>
                    </select>
                    <br></br>
                    <div onChange={(e) => setPrive(e.target.value)}>
                    <label>Rendre L'objectif visible sur votre profil ? Oui</label>
                    <input type="radio" name="prive" defaultChecked={prive} value="True"></input>
                    <label>Non</label>
                    <input type="radio" name="prive" defaultChecked={!prive} value="False"></input>
                    <input type="submit" className="button_submit" value="Valider"/>
                    </div>
                    <br></br>
                    <button className="button_submit" onClick={() => {truc();}}>Annuler</button>
                </form> 
            </div>
        );
    }
    else{
        return (

            <div className='form'>
                Nom : {name}
                <br></br>
                Type : {type}
                <br></br>
                Description : {description}
                <br></br>
                Fréquence : {frequence}
                <br></br>
                Privé : {String(prive)}
                <br></br>
                <button onClick={() => {truc();}}>Modifier</button>
            </div>
        );
    }
    
}
export default Objectif;