'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuário no GitHub'
            onKeyUp={(e) => {
                const value = e.target.value
                const KeyCode = e.which || e.KeyCode
                const ENTER = 13

                if (KeyCode === ENTER) {
                    ajax().get(`https://api.github.com/users/${value}`).then((result) => {
                        console.log(result)
                    })
                }
            }}

        />
    </div>
)

export default Search
