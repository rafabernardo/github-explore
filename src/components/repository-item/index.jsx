import PropTypes from 'prop-types'
import React from 'react'

const RepositoryItem = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default RepositoryItem
