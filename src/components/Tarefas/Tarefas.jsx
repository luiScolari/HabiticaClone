import React from 'react';
import './Tarefas.css'
import Diarias from '../Diarias/Diarias';
import Habitos from '../Habitos/Habitos';

const Tarefas = ({habitos}) => {
    return (
        <div className='Tarefas'>
                <Habitos habitos={habitos} />
                <Diarias />
        </div>
    );
}

export default Tarefas;