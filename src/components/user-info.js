'use strict'

import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars.githubusercontent.com/u/60652221?v=4' />
        <h1 className='username'>
            <a href='https://github.com/enzoserafin'>Enzo Serafin</a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: 122</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 20</li>
        </ul>
    </div>
)

export default UserInfo
