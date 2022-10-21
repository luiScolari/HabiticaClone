import React from 'react'


const Habito = ({ habito }) => {
    return (
        <div>
            <h3>{habito.titulo}</h3>
            <span>{habito.obs}</span>
        </div>
    );
}

export default Habito;