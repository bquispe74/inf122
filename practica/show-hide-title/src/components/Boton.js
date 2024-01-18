import React from 'react';
import '../style/Boton.css';

function Boton({esBotonClick, funcionClick }) {

    return (
        <button className="boton" onClick = {funcionClick}>
            Show / Hide
        </button>
    );
}

export default Boton;