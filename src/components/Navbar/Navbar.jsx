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
                    <div className="item-with-icon">
                        <a aria-label="Gemas" href="#buy-gems" className="top-menu-icon svg-icon gem">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="#24CC8F" d="M0 9l5-7h14l5 7-12 13z"></path>
                                    <path fill="#FFF" opacity=".25" d="M7 8.8L6 4h6zM17 8.8L18 4h-6z"></path>
                                    <path fill="#FFF" opacity=".5" d="M7 8.8L12 4l5 4.8zM2.6 8.8L6 4l1 4.8z"></path>
                                    <path fill="#34313A" opacity=".11" d="M21.4 8.8L18 4l-1 4.8zM2.6 8.8H7l5 10.3z"></path>
                                    <path fill="#FFF" opacity=".5" d="M21.4 8.8H17l-5 10.3z"></path>
                                    <path fill="#FFF" opacity=".25" d="M7 8.8h10l-5 10.3z"></path>
                                </g>
                            </svg>
                        </a>
                        <span data-v-0b0a2436="">0</span>
                    </div>
                    <div className="item-with-icon gold">
                        <div aria-label="Ouro" className="top-menu-icon svg-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd"><circle cx="12" cy="12" r="12" fill="#FFA623"></circle>
                                    <path fill="#FFF" d="M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0" opacity=".5"></path>
                                    <path fill="#FFF" d="M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0" opacity=".25"></path>
                                    <path fill="#BF7D1A" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" opacity=".5"></path>
                                    <path fill="#BF7D1A" d="M13 9v2h-2V9H9v6h2v-2h2v2h2V9z" opacity=".75"></path>
                                </g>
                            </svg>
                        </div>
                        <span data-v-0b0a2436="">9.26</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;