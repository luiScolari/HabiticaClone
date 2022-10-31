import React from 'react'
import Habito from '../Habito/Habito';
import './Habitos.css'


const Habitos = ({ habitos }) => {
    return (
        <div className='habitosContainer'>
            <div className='Habitos'>
            {habitos.map((habito) => (
                <Habito habito={habito} />
            ))
            }
            </div>
        </div>
    );
}

export default Habitos;
