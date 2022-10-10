import React from 'react';

const Objectif = ({ objectif }) => {

    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <div>
                <p>
                    ============================================
                </p>
                <p>
                    Type de l'objectif : {objectif.type}
                </p>
                <p>
                    Titre de l'objectif : {objectif.objectif}
                </p>
                <p>
                    Description de l'objectif : {objectif.description}
                </p>
                <div>
                    <button className="bouton_envie" backgroundcolor="lightgreen" onClick={sayHello}>
                        Ajouter "{objectif.objectif}" à la liste
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Objectif;