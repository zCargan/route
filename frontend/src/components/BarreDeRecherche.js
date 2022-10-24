import React, { useEffect, useState } from 'react';
import axios from 'axios';


import "../styles/barrederecherche.css"
import { useNavigate } from 'react-router-dom';



function BarreRecherche(){
     
    const [user, setUser]  = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:3001/user')
        .then(res => {
            setUser(res.data)

        })
    });

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = user.filter((value) => {
            return value.username.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === ''){
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const versPageProfil = (data) =>{
        navigate('/profil', {state: data});
    }


    return(
        <div className='search'>
            <div className='searchInput'>
            <input type='text' placeholder='Chercher un utilisateur' data={user} onChange={handleFilter}></input>
            </div>
            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.slice(0, 10).map((value, key) => {
                    return <a className='dataItem'>
                            <p onClick={()=>{versPageProfil(value)}}>{value.username}</p>
                        </a>
                })}
            </div>
)}
        </div>
    )
}

export default BarreRecherche;