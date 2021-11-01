import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import StarIcon from '../../assets/ic-star.svg'

import styles from './styles.css'

const RepositoryItem = ({ name, description, stargazersCount }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <Shiitake lines={2} throttleRate={200} className={styles.text} tagName='p'>
        {description}
      </Shiitake>
      <div className={styles['container-star']}>
        <svg viewBox={StarIcon.viewBox} className={styles['star-icon']}>
          <use xlinkHref={`#${StarIcon.id}`} />
        </svg>
        <p className={styles.text}>{stargazersCount} </p>
      </div>
    </div>
  )
}

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stargazersCount: PropTypes.number,
}

RepositoryItem.defaultProps = {
  description: '',
  stargazersCount: 0,
}

export default RepositoryItem
