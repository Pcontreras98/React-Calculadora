import React from 'react';

function Imagen ( {imagen, descripcionFoto} ) {
    return(
        <div className='pc-logo-contenedor'>
            <img 
                className="pc-logo"
                src={require(`../imagenes/${imagen}.png`)}
                alt={`${descripcionFoto}`}
            />
        </div>
    );
};

export default Imagen


