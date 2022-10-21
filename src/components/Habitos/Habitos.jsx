import React from 'react'
import Habito from '../Habito/Habito';


const Habitos = ({ habitos }) => {
    return (
        <>
            {habitos.map((habito) => (
                <Habito habito={habito} />
            ))
            }
        </>
    );
}

export default Habitos;
