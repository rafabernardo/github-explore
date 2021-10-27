import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const RepositoryItem = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default RepositoryItem
