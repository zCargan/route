import React, { useState } from 'react';
import { layer, Map, Layers } from "react-openlayers"
import "../styles/map.css"


const Carte = () => {

    const LouvainLaNeuveLonLat = [513525, 6562800];
    const LouvainLaNeuveZoom = 15;
    const [position0, setPosition0] = useState([0, 0]);
    const [zoom0, setZoom0] = useState(1);

    function LouvainLaNeuve() {
        setPosition0(LouvainLaNeuveLonLat)
        setZoom0(LouvainLaNeuveZoom)
    }

    return (
        <div>
            <div>
                <h1>
                    Trouver des gens prêt de chez vous !
                </h1>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit id incidunt recusandae tempora quas suscipit saepe temporibus? Recusandae expedita pariatur saepe quo amet distinctio inventore, tenetur eaque impedit officiis.
                </p>
            </div>
            <br />
            <div className='map'>
                <Map view={{ center: position0, zoom: zoom0 }}>
                    <Layers>
                        <layer.Tile>

                        </layer.Tile>
                    </Layers>
                </Map>
            </div>
            <br />
            <div>
                <button onClick={(e) => LouvainLaNeuve()}> Centrer sur Louvain La Neuve </button>
            </div>
        </div>
    );
};

export default Carte;