import React from 'react';
import './ProfileMenu.css'

const ProfileMenu = () => {
    return (
        <div className='ProfileMenu'>
            <div className='Profile'>
                <div className='Avatar'>

                </div>
                <div className='Stats'>
                    <h3>ProfileName</h3>
                    <span>Profile@ . Nível 3 guerreiro</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileMenu;