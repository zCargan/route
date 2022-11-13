import React from 'react';
import Connection from '../components/Connection';
import Inscription from '../components/Inscription';
import "../styles/page_compte.css"


const Page_compte = () => {
    return (
        <div id="bloc_user">
            <Connection />
            <Inscription />
        </div>
    );
};

export default Page_compte;