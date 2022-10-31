import React from 'react'
import './Habito.css'

const Habito = ({ habito }) => {
    return (
        <div className='Habito'>
            <button className='botoesMaisEmenos-habito botaoMais-habito'>+</button>
            <div className='tituloEdescricao-habito'>
                <h3 id='tituloHabito'>{habito.titulo}</h3>
                <div id='descricaoHabito'>{habito.obs}</div>
            </div>
            <button className='botoesMaisEmenos-habito botaoMenos-habito'>-</button>
        </div>
    );
}

export default Habito;