import React from 'react';


function Contador({ nroClicks}) {
    return (
        <div className='contador'>{Math.trunc(nroClicks / 60)}mins, {nroClicks%60} secs</div>
    );
}

export default Contador;