import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ isDisable, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isDisable}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.default = {
  isDisable: false
}

Search.propTypes = {
  isDisable: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
