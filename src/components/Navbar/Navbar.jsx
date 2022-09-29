import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='menus-collapse'>
                <ul className='dropdownMenus'>
                    <li>Tarefas</li>
                    <li>Inventário</li>
                    <li>Lojas</li>
                    <li>Grupo</li>
                    <li>Guildas</li>
                    <li>Time</li>
                    <li>Desafios</li>
                    <li>Ajuda</li>
                </ul>
                <div className='cashCounters'>
                    <div>icon1</div>
                    <div>icon2</div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;