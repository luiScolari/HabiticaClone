import React from 'react'
import './Habito.css'

const Habito = ({ habito }) => {
    return (
        <div className='Habito'>
            <button>+</button>
            <h3>{habito.titulo}</h3>
            <span>{habito.obs}</span>
            <button>-</button>
        </div>
    );
}

export default Habito;