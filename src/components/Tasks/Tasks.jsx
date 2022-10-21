import React from 'react';
import './Tasks.css'
import Diarias from '../Diarias/Diarias';
import Habitos from '../Habitos/Habitos';

const Tasks = ({habitos}) => {
    return (
        <div className='Tasks'>
                <Habitos habitos={habitos} />
                <Diarias />
        </div>
    );
}

export default Tasks;