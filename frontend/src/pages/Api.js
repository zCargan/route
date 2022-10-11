import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewObjectif from '../components/NewObjectif';
import Objectif from '../components/Objectif';

const Api = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3010/objectif")
            .then((res) => setData(res.data));
    }, [])

    return (
        < div >
            <div>

                <div>
                </div>
            </div>
            <ul>
                {
                    data.map((objectif, index) => (
                        <Objectif key={index} objectif={objectif} /> //ce que je donne je l'appelle objectif, et c'est la valeur objectif (celui du map)
                    ))
                }


                {/* {
                    data.map((objectif, index) => <li key={index}>{objectif.objectif}</li>)
                } */}
                {/* obj est comment je souhaite appeller individuellement chaque object */}
            </ul>
            <div>
                <NewObjectif />
            </div>
        </div >
    )
    //=> <li key={index}> Objectif : {obj.objectif}</li>

}

export default Api;