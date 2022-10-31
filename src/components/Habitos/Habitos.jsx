import React from 'react'
import Habito from '../Habito/Habito';
import './Habitos.css'


const Habitos = ({ habitos }) => {
    return (
        <div className='Habitos'>
            {habitos.map((habito) => (
                <Habito habito={habito} />
            ))
            }
        </div>
    );
}

export default Habitos;
