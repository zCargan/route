import React, { useEffect, useState , useLayoutEffect} from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import '../styles/boutonfollow.css';



function ButtonFollow (params){


    
    const userId = useLocation();
    const [bouton, setBouton] = useState()
    const [newUsersFollows, setData] = useState([]);

   
    useEffect(() => {
        let id = document.cookie.split("=")[1];
        console.log("je suis le useEffect")
        axios.get(`http://localhost:3001/user/${id}`).then(res => {
            console.log(res.data.userfollows)
           setData(res.data.userfollows)
           console.log(newUsersFollows)
           
            if(newUsersFollows.includes(userId.state._id)){
                setBouton(false);
                console.log('Le bouton est set sur false')
            }
            else{
                console.log(newUsersFollows)
                setBouton(true);
                console.log("Pas dans l'array")
            };
          
        }).catch(err => console.log(err));
    }, [bouton])
    
    

    function suivreFollow(){
        let id = document.cookie.split("=")[1];
        if( newUsersFollows.includes(userId.state._id) ){
            newUsersFollows.splice(newUsersFollows.indexOf(userId.state._id),1)
            axios.put(`http://localhost:3001/user/${id}`, {userfollows : newUsersFollows}).then(alert("Utilisateur retiré"))
            setBouton(true)
        }
        else {
            newUsersFollows.push(userId.state._id);
            axios.put(`http://localhost:3001/user/follow/${id}`, { userfollows : newUsersFollows }).then(alert("Utilisateur suivi!"))
            setBouton(false)
        }

    };




    return(
        <div>
            <button className='boutonFollow' onClick={suivreFollow}>{bouton ? 'Suivre' : 'Ne plus suivre'}</button>
        </div>
        )
    

        

}

export default ButtonFollow;

