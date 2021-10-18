import React from 'react'
import PropTypes from 'prop-types'

const RepositoryItem = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

RepositoryItem.prototype = {
  name: PropTypes.string.isRequired,
}

export default RepositoryItem
